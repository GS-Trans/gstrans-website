# GoDaddy Economy Plan Deployment Guide
## Step-by-Step Instructions for www.gstrans.in

---

## 📋 Pre-Deployment Checklist

Before building, make sure you've updated:
- [ ] Google Analytics ID in `src/app/layout.js` (line 101)
- [ ] Meta Pixel ID in `src/app/layout.js` (line 102)
- [ ] Google Search Console code in `src/app/layout.js` (line 90)
- [ ] Created OG image at `/public/images/og-image.jpg` (1200x630px)

---

## 🔨 Step 1: Build Your Static Website

Open PowerShell in your project directory:

```powershell
cd D:\gst\website

# Clean previous build
Remove-Item -Path .next -Recurse -Force -ErrorAction SilentlyContinue
Remove-Item -Path out -Recurse -Force -ErrorAction SilentlyContinue

# Build static site
npm run build
```

**What this does:**
- Creates an `out` folder with HTML, CSS, JS files
- Optimizes all your pages
- Generates static versions of all routes

**Build time:** 2-5 minutes depending on your system

---

## 📤 Step 2: Upload Files to GoDaddy

### **Method A: Using FileZilla (Recommended)**

1. **Download FileZilla:** https://filezilla-project.org/

2. **Connect to GoDaddy:**
   - Host: `ftp.gstrans.in` (or your server IP)
   - Username: Your GoDaddy FTP username
   - Password: Your GoDaddy FTP password
   - Port: `21`

3. **Navigate to public_html:**
   - Left side: Your local `D:\gst\website\out` folder
   - Right side: GoDaddy `/public_html` folder

4. **Clear public_html first** (important!):
   - Delete all existing files in `public_html`
   - Keep `.htaccess` if it exists (we'll overwrite it)

5. **Upload everything:**
   - Select ALL files from `out` folder
   - Drag to `public_html` on right side
   - Wait for upload to complete (5-10 minutes)

### **Method B: Using GoDaddy File Manager**

1. Login to **GoDaddy cPanel**: https://myh.godaddy.com
2. Click **File Manager**
3. Navigate to `public_html`
4. Delete old files (except `.htaccess` - we'll replace it)
5. Click **Upload**
6. Select all files from `D:\gst\website\out\`
7. Wait for upload to finish

---

## 🔐 Step 3: Enable SSL Certificate (Free)

1. Login to **GoDaddy Account**
2. Go to **My Products**
3. Find your hosting plan → Click **Manage**
4. Go to **SSL Certificates** section
5. Click **Set Up** for free SSL
6. Select **www.gstrans.in**
7. Wait 10-30 minutes for SSL to activate
8. Your site will auto-redirect to HTTPS

---

## 🌐 Step 4: Verify Domain Settings

1. In GoDaddy, go to **Domains** → **Manage DNS**
2. Check these records exist:

**A Record:**
- Type: `A`
- Name: `@`
- Value: Your hosting server IP
- TTL: 1 Hour

**CNAME Record:**
- Type: `CNAME`
- Name: `www`
- Value: `@` or `gstrans.in`
- TTL: 1 Hour

3. Save changes (DNS takes 1-24 hours to propagate)

---

## ✅ Step 5: Test Your Website

### **Basic Tests:**
- [ ] Visit: https://www.gstrans.in
- [ ] Visit: https://gstrans.in (should redirect to www)
- [ ] Test all pages:
  - [ ] Home (/)
  - [ ] About (/about)
  - [ ] Services (/services)
  - [ ] Portfolios (/portfolios)
  - [ ] Careers (/careers)
  - [ ] Contact (/contact)
  - [ ] FAQ (/faq)

### **SEO Tests:**
- [ ] Check robots.txt: https://www.gstrans.in/robots.txt
- [ ] Check sitemap: https://www.gstrans.in/sitemap.xml
- [ ] Test mobile responsiveness (open on phone)

### **Analytics Tests:**
- [ ] Open site and check Google Analytics Real-time report
- [ ] Install "Meta Pixel Helper" extension and verify tracking

---

## 🔍 Step 6: Submit to Search Engines

### **Google Search Console:**
1. Go to: https://search.google.com/search-console
2. Click **Add Property**
3. Enter: `https://www.gstrans.in`
4. Verify using HTML tag (already in your code)
5. Click **Verify**
6. Go to **Sitemaps** → Add sitemap URL: `https://www.gstrans.in/sitemap.xml`
7. Click **Submit**

### **Bing Webmaster Tools:**
1. Go to: https://www.bing.com/webmasters
2. Add site: `https://www.gstrans.in`
3. Verify and submit sitemap

---

## 🚨 Troubleshooting

### **Problem: Site shows "Coming Soon" or old content**
**Solution:**
- Clear GoDaddy cache in cPanel
- Wait 5-10 minutes
- Clear browser cache (Ctrl + Shift + Del)

### **Problem: Images not loading**
**Solution:**
- Check image paths in `out` folder
- Ensure all images uploaded to correct location
- Check file permissions (644 for files, 755 for folders)

### **Problem: Internal links not working (404 errors)**
**Solution:**
- Verify `.htaccess` file uploaded to `public_html`
- Check RewriteEngine is enabled in GoDaddy settings

### **Problem: CSS/styling missing**
**Solution:**
- Check if `_next/static/` folder uploaded completely
- Clear browser cache
- Re-upload `_next` folder

### **Problem: SSL not working**
**Solution:**
- Wait up to 30 minutes for SSL activation
- Check GoDaddy SSL settings
- Force HTTPS in `.htaccess` (already configured)

---

## 🔄 How to Update Your Website

When you make changes:

1. Make changes locally
2. Test: `npm run dev`
3. Build: `npm run build`
4. Upload only changed files from `out` folder to GoDaddy
5. Clear GoDaddy cache

**Pro Tip:** Only upload changed files to save time!

---

## 📊 Performance Tips for GoDaddy Shared Hosting

1. **Optimize Images:**
   - Compress all images before uploading
   - Use WebP format when possible
   - Keep images under 500 KB

2. **Enable GoDaddy CDN** (if available):
   - Go to cPanel → CloudFlare
   - Enable free CDN

3. **Monitor Speed:**
   - Test with: https://pagespeed.web.dev/
   - Target: 70+ score on mobile

---

## 📞 Need Help?

**GoDaddy Support:**
- Phone: 1-480-505-8877
- Chat: Available in cPanel
- Help: https://www.godaddy.com/help

**Common Support Questions:**
- "How do I enable SSL?"
- "Where is my FTP information?"
- "How do I clear hosting cache?"

---

## ✨ Post-Launch Checklist

- [ ] SSL certificate active (green padlock in browser)
- [ ] All pages loading correctly
- [ ] Mobile responsive (test on phone)
- [ ] Forms working (contact form)
- [ ] Google Analytics tracking
- [ ] Submitted to Google Search Console
- [ ] Submitted sitemap
- [ ] Social media sharing working (test Facebook/Twitter)
- [ ] Speed test completed (PageSpeed Insights)
- [ ] Backup created (download `out` folder)

---

**Estimated Total Time:** 30-60 minutes (excluding DNS propagation)

**Your site will be live at:** https://www.gstrans.in 🚀

Good luck with your deployment!
