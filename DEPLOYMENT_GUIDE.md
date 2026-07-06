# GS Trans Website — Google Cloud Deployment Guide

**Project:** GS Trans (www.gstrans.in)  
**Stack:** Next.js 16.0.7, Docker, Google Cloud Run, Cloud Build CI/CD  
**Region:** asia-south1 (Mumbai)  
**Date:** March 15, 2026  

---

## Deployment Overview — Phase Summary

| Phase | Description | Key Resources Created |
|-------|-------------|----------------------|
| **Phase 1** | Google Cloud Project Setup | Project `gstrans-platform`, Artifact Registry, enabled APIs |
| **Phase 2** | Secrets & Docker Configuration | Secret Manager secrets, `cloudbuild.yaml`, Dockerfile tested |
| **Phase 3** | Pre-Deploy Configuration | Google Analytics (G-BB5TKMLHMM), removed API URL |
| **Phase 4** | GitHub Repository & CI/CD | GitHub repo `GSTRANS/gstrans-website`, Cloud Build trigger |
| **Phase 5** | First Deployment & IAM Fixes | Artifact Registry permissions, Cloud Run deploy, public access |
| **Phase 6** | Custom Domain & Load Balancer | Global LB, SSL cert, static IP (34.36.219.188), HTTP→HTTPS redirect |
| **Phase 7** | DNS Configuration | GoDaddy A records, ACME challenge CNAME for Certificate Manager |

---

## Infrastructure Summary

| Resource | Value |
|----------|-------|
| GCP Project ID | `gstrans-platform` |
| GCP Project Number | `184660800344` |
| GCP Account | `admin@gstrans.in` |
| Billing Account | `01D41E-6D9ED5-931C61` |
| Organization ID | `602018501541` |
| Region | `asia-south1` (Mumbai) |
| Cloud Run Service | `gstrans-website` |
| Cloud Run URL | `https://gstrans-website-dxykw34qva-el.a.run.app` |
| Static IP | `34.36.219.188` |
| Live URL | `https://www.gstrans.in` |
| GitHub Repo | `https://github.com/GSTRANS/gstrans-website.git` |
| Cloud Build Trigger | `deploy-website` (auto-deploy on push to `main`) |
| Compute SA | `184660800344-compute@developer.gserviceaccount.com` |

---

## Phase 1: Google Cloud Project Setup

### 1.1 Install Google Cloud SDK

Download and install from https://cloud.google.com/sdk/docs/install (v560.0.0 used).

### 1.2 Authenticate & Create Project

```bash
# Authenticate with Google Cloud
gcloud auth login

# Set account
gcloud config set account admin@gstrans.in

# Create the project
gcloud projects create gstrans-platform --name="GS Trans Platform"

# Set as default project
gcloud config set project gstrans-platform
```

### 1.3 Link Billing Account

```bash
# List billing accounts
gcloud billing accounts list

# Link billing to project
gcloud billing projects link gstrans-platform --billing-account=01D41E-6D9ED5-931C61
```

### 1.4 Enable Required APIs

```bash
gcloud services enable \
  run.googleapis.com \
  artifactregistry.googleapis.com \
  cloudbuild.googleapis.com \
  secretmanager.googleapis.com \
  --project=gstrans-platform
```

### 1.5 Create Artifact Registry Repository

```bash
gcloud artifacts repositories create gstrans \
  --repository-format=docker \
  --location=asia-south1 \
  --description="GS Trans Docker images" \
  --project=gstrans-platform
```

### 1.6 Grant Cloud Build Service Account Roles

```bash
# Grant Cloud Run admin role
gcloud projects add-iam-policy-binding gstrans-platform \
  --member="serviceAccount:184660800344@cloudbuild.gserviceaccount.com" \
  --role="roles/run.admin"

# Grant IAM Service Account User role
gcloud projects add-iam-policy-binding gstrans-platform \
  --member="serviceAccount:184660800344@cloudbuild.gserviceaccount.com" \
  --role="roles/iam.serviceAccountUser"
```

---

## Phase 2: Secrets & Docker Configuration

### 2.1 Store Secrets in Secret Manager

```bash
# Store Gmail credentials and admin email
echo -n "info@gstrans.in" | gcloud secrets create GMAIL_USER \
  --data-file=- --project=gstrans-platform

echo -n "szbjwjnhemdclipb" | gcloud secrets create GMAIL_APP_PASSWORD \
  --data-file=- --project=gstrans-platform

echo -n "info@gstrans.in" | gcloud secrets create ADMIN_EMAIL \
  --data-file=- --project=gstrans-platform
```

### 2.2 Grant Secret Accessor to Cloud Build

```bash
gcloud projects add-iam-policy-binding gstrans-platform \
  --member="serviceAccount:184660800344@cloudbuild.gserviceaccount.com" \
  --role="roles/secretmanager.secretAccessor"
```

### 2.3 Dockerfile (3-Stage Build)

```dockerfile
FROM node:20-alpine AS base

# Install dependencies only when needed
FROM base AS deps
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm ci --omit=dev

# Build the application
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Production image
FROM base AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV PORT=8080

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 8080

CMD ["node", "server.js"]
```

### 2.4 .dockerignore

```
node_modules
.next
.vercel
.git
.gitignore
*.md
.env.local
.env.development
.env.production
Dockerfile
docker-compose*
```

### 2.5 cloudbuild.yaml

```yaml
steps:
  # Build the Docker image
  - name: 'gcr.io/cloud-builders/docker'
    args: ['build', '-t', 'asia-south1-docker.pkg.dev/$PROJECT_ID/gstrans/website:$COMMIT_SHA', '.']

  # Push the image to Artifact Registry
  - name: 'gcr.io/cloud-builders/docker'
    args: ['push', 'asia-south1-docker.pkg.dev/$PROJECT_ID/gstrans/website:$COMMIT_SHA']

  # Deploy to Cloud Run
  - name: 'gcr.io/google.com/cloudsdktool/cloud-sdk'
    entrypoint: gcloud
    args:
      - 'run'
      - 'deploy'
      - 'gstrans-website'
      - '--image'
      - 'asia-south1-docker.pkg.dev/$PROJECT_ID/gstrans/website:$COMMIT_SHA'
      - '--region'
      - 'asia-south1'
      - '--platform'
      - 'managed'
      - '--port'
      - '8080'
      - '--memory'
      - '512Mi'
      - '--min-instances'
      - '0'
      - '--max-instances'
      - '3'
      - '--allow-unauthenticated'
      - '--set-env-vars'
      - 'NODE_ENV=production'
      - '--set-secrets'
      - 'GMAIL_USER=GMAIL_USER:latest,GMAIL_APP_PASSWORD=GMAIL_APP_PASSWORD:latest,ADMIN_EMAIL=ADMIN_EMAIL:latest'

images:
  - 'asia-south1-docker.pkg.dev/$PROJECT_ID/gstrans/website:$COMMIT_SHA'

options:
  logging: CLOUD_LOGGING_ONLY
```

### 2.6 Local Docker Build Test

```bash
cd website/
docker build -t gstrans-website .
docker run -p 8080:8080 gstrans-website

# Verify: http://localhost:8080 → HTTP 200, correct title
```

---

## Phase 3: Pre-Deploy Configuration

### 3.1 Add Google Analytics

Updated `src/app/layout.js` to use measurement ID `G-BB5TKMLHMM`:

```jsx
// src/app/layout.js
<head>
  <StructuredData />
  <GoogleAnalytics measurementId="G-BB5TKMLHMM" />
  <MetaPixel pixelId="YOUR_PIXEL_ID" />
</head>
```

The `GoogleAnalytics` component (`src/components/shared/analytics/GoogleAnalytics.js`):

```jsx
"use client";

import Script from "next/script";

export default function GoogleAnalytics({ measurementId = "G-XXXXXXXXXX" }) {
  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${measurementId}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  );
}
```

### 3.2 Remove API URL

Removed `NEXT_PUBLIC_API_URL=https://api.gstrans.in` from `cloudbuild.yaml` `--set-env-vars` since backend is not yet deployed. Only `NODE_ENV=production` remains.

---

## Phase 4: GitHub Repository & CI/CD

### 4.1 Initialize Git & Push to GitHub

```bash
cd website/

# Initialize git repository
git init

# Add remote (repo created on GitHub: GSTRANS/gstrans-website)
git remote add origin https://github.com/GSTRANS/gstrans-website.git

# Configure git identity
git config user.email "info@gstrans.in"
git config user.name "GSTRANS"

# Stage, commit, and push
git add .
git commit -m "Initial commit: GS Trans website"
git branch -M main
git push -u origin main
```

### 4.2 Create Cloud Build Trigger

Created via **Google Cloud Console** (requires browser OAuth for GitHub connection):

1. Navigate to: `https://console.cloud.google.com/cloud-build/triggers?project=gstrans-platform`
2. Click **"Create Trigger"**
3. Configuration:
   - **Name:** `deploy-website`
   - **Region:** `asia-south1`
   - **Event:** Push to a branch
   - **Source:** Connect New Repository → GitHub → `GSTRANS/gstrans-website`
   - **Branch:** `^main$`
   - **Configuration:** Cloud Build configuration file → `cloudbuild.yaml`
4. Click **Create**

**Trigger ID:** `6913abee-c75d-4910-8569-4a9b115d388c`

---

## Phase 5: First Deployment & IAM Fixes

### 5.1 Trigger First Build (Failed)

```bash
gcloud builds triggers run deploy-website \
  --project=gstrans-platform \
  --region=asia-south1 \
  --branch=main
```

**Result:** Step 1 (docker build) succeeded, Step 2 (docker push) FAILED.  
**Cause:** Compute Engine default service account (`184660800344-compute@developer.gserviceaccount.com`) lacked Artifact Registry write permissions. The trigger runs under this service account, not the Cloud Build SA.

### 5.2 Fix: Grant Permissions to Compute Engine SA

```bash
# Artifact Registry writer (for docker push)
gcloud artifacts repositories add-iam-policy-binding gstrans \
  --project=gstrans-platform \
  --location=asia-south1 \
  --member="serviceAccount:184660800344-compute@developer.gserviceaccount.com" \
  --role="roles/artifactregistry.writer"

# Cloud Run admin (for deploying services)
gcloud projects add-iam-policy-binding gstrans-platform \
  --member="serviceAccount:184660800344-compute@developer.gserviceaccount.com" \
  --role="roles/run.admin" \
  --condition=None

# IAM Service Account User (for Cloud Run to act as itself)
gcloud projects add-iam-policy-binding gstrans-platform \
  --member="serviceAccount:184660800344-compute@developer.gserviceaccount.com" \
  --role="roles/iam.serviceAccountUser" \
  --condition=None

# Secret Manager accessor (for reading secrets at runtime)
gcloud projects add-iam-policy-binding gstrans-platform \
  --member="serviceAccount:184660800344-compute@developer.gserviceaccount.com" \
  --role="roles/secretmanager.secretAccessor" \
  --condition=None
```

### 5.3 Re-trigger Build (Success)

```bash
gcloud builds triggers run deploy-website \
  --project=gstrans-platform \
  --region=asia-south1 \
  --branch=main
```

**Build ID:** `f39b1e55-8535-4bf7-9815-ed03bf1cf777`  
**Result:** All 3 steps SUCCESS  
**Cloud Run URL:** `https://gstrans-website-dxykw34qva-el.a.run.app`

### 5.4 Fix: Public Access (Organization Policy Override)

The `--allow-unauthenticated` flag didn't take effect because an organization policy (`iam.allowedPolicyMemberDomains`) blocked `allUsers` bindings.

```bash
# Check the org policy
gcloud resource-manager org-policies describe iam.allowedPolicyMemberDomains \
  --project=gstrans-platform --effective

# Result: Only allowed domain C01g2eu9t (org domain)

# Enable Organization Policy API
gcloud services enable orgpolicy.googleapis.com --project=gstrans-platform

# Grant org policy admin role to admin account
gcloud organizations add-iam-policy-binding 602018501541 \
  --member="user:admin@gstrans.in" \
  --role="roles/orgpolicy.policyAdmin"

# Reset the domain restriction policy for this project
gcloud org-policies reset iam.allowedPolicyMemberDomains \
  --project=gstrans-platform

# Wait ~60 seconds for propagation, then grant public access
gcloud run services add-iam-policy-binding gstrans-website \
  --project=gstrans-platform \
  --region=asia-south1 \
  --member="allUsers" \
  --role="roles/run.invoker"
```

### 5.5 Verify Deployment

```bash
# Check HTTP status
curl -s -o /dev/null -w "%{http_code}" https://gstrans-website-dxykw34qva-el.a.run.app
# → 200

# Check page title
curl -s https://gstrans-website-dxykw34qva-el.a.run.app | grep -o '<title>.*</title>'
# → <title>GS Trans - Smart Transport & Logistics Solutions in India</title>

# Check Google Analytics
curl -s https://gstrans-website-dxykw34qva-el.a.run.app | grep -o 'G-BB5TKMLHMM'
# → G-BB5TKMLHMM

# Check key pages
curl -s -o /dev/null -w "%{http_code}" https://gstrans-website-dxykw34qva-el.a.run.app/about     # → 200
curl -s -o /dev/null -w "%{http_code}" https://gstrans-website-dxykw34qva-el.a.run.app/services  # → 200
curl -s -o /dev/null -w "%{http_code}" https://gstrans-website-dxykw34qva-el.a.run.app/contact   # → 200
curl -s -o /dev/null -w "%{http_code}" https://gstrans-website-dxykw34qva-el.a.run.app/pricing   # → 200
```

---

## Phase 6: Custom Domain & Load Balancer

### Why a Load Balancer?

Cloud Run **domain mappings are not supported in `asia-south1`** region. The alternative is a **Global External Application Load Balancer** which provides:
- Custom domain support with Google-managed SSL
- HTTP → HTTPS redirect
- Global edge caching
- Static IP address

### 6.1 Enable Compute Engine API

```bash
gcloud services enable compute.googleapis.com --project=gstrans-platform
```

### 6.2 Create Serverless Network Endpoint Group (NEG)

Points the load balancer to the Cloud Run service.

```bash
gcloud compute network-endpoint-groups create gstrans-website-neg \
  --region=asia-south1 \
  --network-endpoint-type=serverless \
  --cloud-run-service=gstrans-website \
  --project=gstrans-platform
```

### 6.3 Create Backend Service

```bash
gcloud compute backend-services create gstrans-website-backend \
  --global \
  --project=gstrans-platform
```

### 6.4 Add NEG to Backend Service

```bash
gcloud compute backend-services add-backend gstrans-website-backend \
  --global \
  --network-endpoint-group=gstrans-website-neg \
  --network-endpoint-group-region=asia-south1 \
  --project=gstrans-platform
```

### 6.5 Create URL Map

Routes incoming requests to the backend service.

```bash
gcloud compute url-maps create gstrans-website-urlmap \
  --default-service=gstrans-website-backend \
  --project=gstrans-platform
```

### 6.6 Create Google-Managed SSL Certificate

```bash
gcloud compute ssl-certificates create gstrans-website-cert-v2 \
  --domains "www.gstrans.in,gstrans.in" \
  --global \
  --project=gstrans-platform
```

> **Note:** In PowerShell, use `--domains "www.gstrans.in,gstrans.in"` with quotes. Without quotes, PowerShell splits the comma-separated values as separate arguments.

### 6.7 Create HTTPS Target Proxy

Links the SSL certificate and URL map.

```bash
gcloud compute target-https-proxies create gstrans-website-https-proxy \
  --ssl-certificates=gstrans-website-cert-v2 \
  --url-map=gstrans-website-urlmap \
  --project=gstrans-platform
```

### 6.8 Reserve Global Static IP

```bash
gcloud compute addresses create gstrans-website-ip \
  --global \
  --project=gstrans-platform

# Get the IP address
gcloud compute addresses describe gstrans-website-ip \
  --global \
  --project=gstrans-platform \
  --format="value(address)"
# → 34.36.219.188
```

### 6.9 Create HTTPS Forwarding Rule

```bash
gcloud compute forwarding-rules create gstrans-website-https-rule \
  --global \
  --address=gstrans-website-ip \
  --target-https-proxy=gstrans-website-https-proxy \
  --ports=443 \
  --project=gstrans-platform
```

### 6.10 Create HTTP → HTTPS Redirect

Three resources are needed for automatic HTTP to HTTPS redirection:

**a) Redirect URL Map:**

Create a YAML file (`http-redirect.yaml`):
```yaml
name: gstrans-website-http-redirect
defaultUrlRedirect:
  httpsRedirect: true
  redirectResponseCode: MOVED_PERMANENTLY_DEFAULT
```

```bash
gcloud compute url-maps import gstrans-website-http-redirect \
  --global \
  --project=gstrans-platform \
  --source=http-redirect.yaml \
  --quiet
```

**b) HTTP Target Proxy:**

```bash
gcloud compute target-http-proxies create gstrans-website-http-proxy \
  --url-map=gstrans-website-http-redirect \
  --project=gstrans-platform
```

**c) HTTP Forwarding Rule:**

```bash
gcloud compute forwarding-rules create gstrans-website-http-rule \
  --global \
  --address=gstrans-website-ip \
  --target-http-proxy=gstrans-website-http-proxy \
  --ports=80 \
  --project=gstrans-platform
```

---

## Phase 7: DNS Configuration

### 7.1 GoDaddy DNS Records

Set these DNS records in GoDaddy DNS Management for `gstrans.in`:

| Type | Name | Value | TTL |
|------|------|-------|-----|
| **A** | **@** | **34.36.219.188** | 600 |
| **A** | **www** | **34.36.219.188** | 600 |

> Remove any existing A/CNAME records for `@` and `www` that point elsewhere before adding these.

### 7.2 Certificate Manager DNS Authorization (ACME Challenge)

For faster SSL certificate provisioning via Certificate Manager:

```bash
# Enable Certificate Manager API
gcloud services enable certificatemanager.googleapis.com --project=gstrans-platform

# Create DNS authorization
gcloud certificate-manager dns-authorizations create gstrans-dns-auth \
  --domain=gstrans.in \
  --project=gstrans-platform

# Get the verification CNAME record
gcloud certificate-manager dns-authorizations describe gstrans-dns-auth \
  --project=gstrans-platform \
  --format="yaml(dnsResourceRecord)"
```

**Add this CNAME record in GoDaddy:**

| Type | Name | Value |
|------|------|-------|
| CNAME | `_acme-challenge` | `fa4c7221-bb69-4f2b-ae61-36e8d37b909e.0.authorize.certificatemanager.goog.` |

### 7.3 Verify DNS Propagation

```bash
# Check A records
nslookup gstrans.in 8.8.8.8
# → 34.36.219.188

nslookup www.gstrans.in 8.8.8.8
# → 34.36.219.188

# Check ACME challenge
nslookup _acme-challenge.gstrans.in 8.8.8.8
```

### 7.4 Monitor SSL Certificate Provisioning

```bash
gcloud compute ssl-certificates describe gstrans-website-cert-v2 \
  --global \
  --project=gstrans-platform \
  --format="yaml(managed)"
```

**Expected output when ready:**
```yaml
managed:
  domainStatus:
    gstrans.in: ACTIVE
    www.gstrans.in: ACTIVE
  domains:
  - www.gstrans.in
  - gstrans.in
  status: ACTIVE
```

SSL provisioning takes 15-60 minutes after DNS propagation.

---

## Complete IAM Roles Summary

### Compute Engine Default Service Account
`184660800344-compute@developer.gserviceaccount.com`

| Role | Purpose |
|------|---------|
| `roles/artifactregistry.writer` | Push Docker images to Artifact Registry |
| `roles/run.admin` | Deploy services to Cloud Run |
| `roles/iam.serviceAccountUser` | Act as service account during deployment |
| `roles/secretmanager.secretAccessor` | Read secrets from Secret Manager |

### Cloud Build Service Account
`184660800344@cloudbuild.gserviceaccount.com`

| Role | Purpose |
|------|---------|
| `roles/run.admin` | Deploy to Cloud Run |
| `roles/iam.serviceAccountUser` | Act as service account |
| `roles/secretmanager.secretAccessor` | Read secrets during build |

### Organization-Level (admin@gstrans.in)

| Role | Purpose |
|------|---------|
| `roles/orgpolicy.policyAdmin` | Override org-level IAM policies |
| `roles/resourcemanager.organizationAdmin` | Manage organization settings |

### Cloud Run Service IAM

| Member | Role | Purpose |
|--------|------|---------|
| `allUsers` | `roles/run.invoker` | Allow public unauthenticated access |

### Organization Policy Override

| Policy | Action | Purpose |
|--------|--------|---------|
| `iam.allowedPolicyMemberDomains` | Reset at project level | Allow `allUsers` binding on Cloud Run |

---

## Enabled APIs

```bash
gcloud services list --enabled --project=gstrans-platform
```

| API | Purpose |
|-----|---------|
| `run.googleapis.com` | Cloud Run service hosting |
| `artifactregistry.googleapis.com` | Docker image storage |
| `cloudbuild.googleapis.com` | CI/CD pipeline |
| `secretmanager.googleapis.com` | Secure secret storage |
| `compute.googleapis.com` | Load Balancer, NEG, SSL, IP |
| `orgpolicy.googleapis.com` | Organization policy management |
| `certificatemanager.googleapis.com` | SSL certificate management |

---

## Load Balancer Architecture

```
User Browser
    │
    ▼
┌─────────────────────────────┐
│  Global Static IP           │
│  34.36.219.188               │
├─────────┬───────────────────┤
│ Port 80 │ Port 443          │
│ (HTTP)  │ (HTTPS)           │
└────┬────┴────────┬──────────┘
     │              │
     ▼              ▼
┌─────────┐  ┌──────────────┐
│ HTTP    │  │ HTTPS Target │
│ Proxy   │  │ Proxy        │
└────┬────┘  └──────┬───────┘
     │               │
     ▼               ▼
┌─────────────┐ ┌──────────────┐
│ Redirect    │ │ URL Map      │
│ URL Map     │ │ (main)       │
│ (301→HTTPS) │ └──────┬───────┘
└─────────────┘        │
                       ▼
                ┌──────────────┐
                │ Backend      │
                │ Service      │
                └──────┬───────┘
                       │
                       ▼
                ┌──────────────┐
                │ Serverless   │
                │ NEG          │
                │ (asia-south1)│
                └──────┬───────┘
                       │
                       ▼
                ┌──────────────┐
                │ Cloud Run    │
                │ gstrans-     │
                │ website      │
                │ (Port 8080)  │
                └──────────────┘
```

---

## CI/CD Pipeline Flow

```
Developer pushes to main branch
         │
         ▼
┌─────────────────────────┐
│ GitHub: GSTRANS/         │
│ gstrans-website (main)   │
└────────┬────────────────┘
         │ webhook
         ▼
┌─────────────────────────┐
│ Cloud Build Trigger      │
│ "deploy-website"         │
│ Region: asia-south1      │
└────────┬────────────────┘
         │
    ┌────┴────┐
    │ Step 1  │ docker build → tag with $COMMIT_SHA
    ├─────────┤
    │ Step 2  │ docker push → Artifact Registry
    ├─────────┤
    │ Step 3  │ gcloud run deploy → Cloud Run
    │         │ (env vars + secrets injected)
    └─────────┘
         │
         ▼
┌─────────────────────────┐
│ Cloud Run Service        │
│ New revision deployed    │
│ Traffic shifts to new    │
└─────────────────────────┘
```

---

## Deployment Commands Quick Reference

### Deploy (Automatic)
```bash
cd website/
git add .
git commit -m "your changes"
git push origin main
# Cloud Build triggers automatically
```

### Check Build Status
```bash
gcloud builds list --project=gstrans-platform --region=asia-south1 --limit=3
```

### Check Build Logs
```bash
gcloud builds describe <BUILD_ID> \
  --project=gstrans-platform \
  --region=asia-south1 \
  --format="yaml(status,failureInfo,steps.status)"
```

### Manual Trigger
```bash
gcloud builds triggers run deploy-website \
  --project=gstrans-platform \
  --region=asia-south1 \
  --branch=main
```

### Check Cloud Run Service
```bash
gcloud run services describe gstrans-website \
  --project=gstrans-platform \
  --region=asia-south1 \
  --format="value(status.url)"
```

### Check SSL Certificate Status
```bash
gcloud compute ssl-certificates describe gstrans-website-cert-v2 \
  --global \
  --project=gstrans-platform \
  --format="yaml(managed)"
```

### View Cloud Run Logs
```bash
gcloud run services logs read gstrans-website \
  --project=gstrans-platform \
  --region=asia-south1 \
  --limit=50
```

---

## Troubleshooting

### Build Failed — Artifact Registry Push
**Error:** `step exited with non-zero status: 1` on docker push step  
**Fix:** Grant `roles/artifactregistry.writer` to the service account running the build.

### 403 Forbidden on Cloud Run URL
**Cause:** Organization policy blocks `allUsers` IAM binding  
**Fix:** Reset `iam.allowedPolicyMemberDomains` at project level, then add `allUsers` → `roles/run.invoker`.

### Domain Mapping Not Supported
**Error:** `Creating domain mappings is not allowed in asia-south1`  
**Fix:** Use Global External Application Load Balancer instead of Cloud Run domain mappings.

### SSL Certificate Stuck on PROVISIONING
**Cause:** DNS records not pointing to the static IP, or propagation not complete  
**Fix:** Verify DNS with `nslookup domain 8.8.8.8`. Ensure A records point to `34.36.219.188`. Wait 15-60 minutes.

### PowerShell Comma-Separated Domains Issue
**Error:** `Invalid domain name specified` for `--domains=a.com,b.com`  
**Fix:** Use quotes: `--domains "www.gstrans.in,gstrans.in"`

---

## Final Verification Checklist

| Check | Command | Expected |
|-------|---------|----------|
| HTTPS www | `curl -s -o /dev/null -w "%{http_code}" https://www.gstrans.in` | `200` |
| HTTPS apex | `curl -s -o /dev/null -w "%{http_code}" https://gstrans.in` | `200` |
| HTTP redirect | `curl -s -o /dev/null -w "%{http_code}" -L0 http://gstrans.in` | `301` |
| Page title | Check browser | "GS Trans - Smart Transport & Logistics Solutions in India" |
| Google Analytics | View page source | `G-BB5TKMLHMM` present |
| SSL valid | Browser padlock icon | Valid Google-managed certificate |
| Auto-deploy | Push to `main` | New build triggers in Cloud Build |
