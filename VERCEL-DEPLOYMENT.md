# Deploy GS Trans to Vercel (Free & Recommended)

## Why Vercel?
- ✅ **Made for Next.js** - Perfect compatibility
- ✅ **Free hosting** - No cost for your site
- ✅ **Automatic SSL** - HTTPS included
- ✅ **Global CDN** - Fast worldwide
- ✅ **Zero configuration** - Deploy in 5 minutes
- ✅ **Keep your domain** - Point www.gstrans.in to Vercel

---

## 🚀 Quick Deployment (5 Minutes)

### Step 1: Install Vercel CLI

```powershell
npm i -g vercel
```

### Step 2: Login to Vercel

```powershell
vercel login
```

Enter your email - you'll get a verification link.

### Step 3: Deploy

```powershell
cd D:\gst\website
vercel
```

**Follow the prompts:**
- Set up and deploy? **Y**
- Which scope? Choose your account
- Link to existing project? **N**
- Project name? **gstrans** (or press Enter)
- Directory? **./** (press Enter)
- Override settings? **N**

**Wait 2-3 minutes** - Your site will be deployed!

### Step 4: Assign Your Domain

```powershell
vercel --prod
```

This creates your production deployment.

Then add your custom domain:

```powershell
vercel domains add www.gstrans.in
```

---

## 🌐 Configure GoDaddy DNS

After adding domain in Vercel, you'll get DNS instructions:

### In GoDaddy DNS Settings:

**Add CNAME Record:**
- Type: `CNAME`
- Name: `www`  
- Value: `cname.vercel-dns.com`
- TTL: `1 Hour`

**Add A Records for root domain:**
- Type: `A`
- Name: `@`
- Value: `76.76.21.21`
- TTL: `1 Hour`

(Repeat for all A record IPs Vercel provides)

**Wait 1-24 hours for DNS propagation.**

---

## ✅ What You Get

✅ Your site at: **https://www.gstrans.in**
✅ Automatic HTTPS (SSL)
✅ Global CDN for fast loading
✅ Automatic deployments on code changes
✅ Analytics dashboard
✅ Preview deployments for testing
✅ All Next.js features working perfectly
✅ **No styling issues!**

---

## 🔄 Future Updates

To update your site:

```powershell
cd D:\gst\website
vercel --prod
```

That's it! Your changes are live in 2 minutes.

---

## 💰 Cost Comparison

| Option | Monthly Cost | Setup Time | Features |
|--------|--------------|------------|----------|
| **Vercel (Free)** | $0 | 5 min | All features, perfect styling |
| GoDaddy Economy | $5-7 | 1 hour | Static only, styling issues |
| GoDaddy Deluxe+ | $10-15 | 1 hour | Node.js support needed |

**Recommendation:** Use Vercel - it's free, fast, and made for Next.js!

---

## 🆘 Alternative: Use GitHub + Vercel

If you prefer not to use CLI:

1. Push code to GitHub
2. Go to https://vercel.com
3. Click "Import Project"
4. Select your GitHub repository
5. Click "Deploy"
6. Done!

---

**Need help?** Vercel has excellent docs: https://vercel.com/docs
