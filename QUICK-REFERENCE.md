# Quick Reference - Digital Marketing Setup

## 🔐 Get Your Tracking IDs

### Google Analytics 4
1. Go to https://analytics.google.com
2. Click "Admin" (gear icon bottom left)
3. Click "Create Property"
4. Fill in property details:
   - Property name: GS Trans
   - Reporting time zone: India (IST)
   - Currency: Indian Rupee (INR)
5. Click "Next" → Select "Web" platform
6. Get your **Measurement ID** (format: `G-XXXXXXXXXX`)
7. **Update in:** `src/app/layout.js` line 101

### Meta Pixel (Facebook/Instagram)
1. Go to https://business.facebook.com/events_manager
2. Click "+ Add" → "Meta Pixel"
3. Name it: "GS Trans Website"
4. Get your **Pixel ID** (numeric, e.g., `123456789012345`)
5. **Update in:** `src/app/layout.js` line 102

### Google Search Console
1. Go to https://search.google.com/search-console
2. Click "Add Property"
3. Enter: `https://www.gstrans.in`
4. Choose verification method: "HTML tag"
5. Copy the `content="..."` value
6. **Update in:** `src/app/layout.js` line 90
7. After deployment, click "Verify" in Search Console
8. Submit sitemap: `https://www.gstrans.in/sitemap.xml`

## 📊 Event Tracking Examples

### Track Button Clicks (Google Analytics)
```javascript
import { useEffect } from 'react';

function QuoteButton() {
  const handleClick = () => {
    // Track button click
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'quote_request', {
        'event_category': 'engagement',
        'event_label': 'Get a Quote Button',
      });
    }
  };

  return <button onClick={handleClick}>Get a Quote</button>;
}
```

### Track Form Submissions
```javascript
function ContactForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Track form submission
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'form_submit', {
        'event_category': 'contact',
        'event_label': 'Contact Form',
      });
    }

    // Also track with Meta Pixel
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'Contact');
    }

    // Your form submission logic here
  };

  return <form onSubmit={handleSubmit}>...</form>;
}
```

### Track Page Views (Automatic)
Both Google Analytics and Meta Pixel are already configured to track page views automatically. No additional code needed!

## 🎨 Create OG Image

### Design Specifications
- **Size:** 1200 x 630 pixels
- **Format:** JPG or PNG
- **File size:** < 300 KB (ideally < 200 KB)

### Design Elements to Include
1. **GS Trans Logo** (top left or center)
2. **Tagline:** "Smart Transport, Smarter Solutions"
3. **Background:** Dark with gold accents (matching website theme)
4. **Optional:** Truck/logistics icon or image
5. **Keep text large and readable** (will be shown at small sizes)

### Design Tools
- **Canva:** Free templates available (search "Open Graph")
- **Figma:** Use 1200x630 frame
- **Photoshop/GIMP:** Create new file with exact dimensions

### Export Settings
- **Format:** JPG (smaller file size) or PNG (if transparency needed)
- **Quality:** 80-85% (balance between quality and size)
- **Color mode:** RGB
- **Save as:** `og-image.jpg`
- **Upload to:** `/public/images/og-image.jpg`

## 🧪 Testing Your Setup

### 1. Test Robots.txt
```
Visit: https://www.gstrans.in/robots.txt
Should see:
  User-Agent: *
  Allow: /
  Disallow: /api/
  ...
```

### 2. Test Sitemap
```
Visit: https://www.gstrans.in/sitemap.xml
Should see XML with all pages listed
```

### 3. Test Google Analytics (Real-time)
1. Go to Analytics dashboard
2. Click "Reports" → "Realtime"
3. Open your website in another tab
4. You should see yourself as an active user
5. Navigate to different pages - check if events fire

### 4. Test Meta Pixel
1. Install "Meta Pixel Helper" Chrome extension
2. Visit your website
3. Extension icon should light up green
4. Click to see PageView event

### 5. Test Social Media Previews
```
Facebook: https://developers.facebook.com/tools/debug/
Twitter: https://cards-dev.twitter.com/validator
LinkedIn: https://www.linkedin.com/post-inspector/

Enter: https://www.gstrans.in
```

### 6. Test Structured Data
```
Visit: https://search.google.com/test/rich-results
Enter: https://www.gstrans.in
Should detect Organization, LocalBusiness, Service schemas
```

## ⚡ Deploy Checklist

Before going live:
- [ ] Replace `G-XXXXXXXXXX` with real GA4 Measurement ID
- [ ] Replace `YOUR_PIXEL_ID` with real Meta Pixel ID
- [ ] Replace `your-google-verification-code-here` with real code
- [ ] Upload OG image to `/public/images/og-image.jpg`
- [ ] Test all tracking in incognito mode
- [ ] Verify robots.txt accessible
- [ ] Verify sitemap.xml accessible
- [ ] Test social media previews
- [ ] Check mobile responsiveness
- [ ] Run PageSpeed Insights test

After deployment:
- [ ] Verify Google Search Console (green checkmark)
- [ ] Submit sitemap in Search Console
- [ ] Check Google Analytics real-time data
- [ ] Test Meta Pixel with Pixel Helper
- [ ] Share a test post on social media (check preview)
- [ ] Monitor for any console errors

## 🎯 Key Metrics to Monitor (Weekly)

### Traffic (Google Analytics)
- Total users
- New vs returning users
- Traffic sources (Organic, Direct, Social, Referral)
- Top pages
- Geographic data

### Engagement
- Bounce rate (target: < 60%)
- Average session duration (target: > 2 minutes)
- Pages per session (target: > 3)

### Conversions
- Quote requests
- Contact form submissions
- Phone number clicks
- Service page visits

### SEO (Google Search Console)
- Total impressions
- Total clicks
- Average position (target: improve monthly)
- CTR (target: > 3%)
- Core Web Vitals (all green)

## 🚨 Troubleshooting

### Analytics not tracking
1. Check browser console for errors
2. Verify Measurement ID is correct
3. Test in incognito mode (extensions can block tracking)
4. Wait 24-48 hours for data to appear in reports

### Social media preview not showing
1. Make sure og-image.jpg exists and is accessible
2. Check file size (must be < 8 MB, ideally < 1 MB)
3. Clear cache in testing tools
4. Verify Open Graph tags in page source

### Structured data errors
1. Test with Rich Results Test tool
2. Check JSON-LD syntax in browser console
3. Verify all required fields are present
4. Wait 1-2 weeks for Google to re-crawl

### Sitemap not appearing in Search Console
1. Verify sitemap accessible: /sitemap.xml
2. Check XML format (no errors)
3. Submit manually in Search Console
4. Wait 24-48 hours for processing

## 📞 Support Resources

- **Google Analytics Help:** https://support.google.com/analytics
- **Meta Business Help:** https://www.facebook.com/business/help
- **Schema.org Docs:** https://schema.org/docs/schemas.html
- **Next.js Docs:** https://nextjs.org/docs
- **Web.dev (Performance):** https://web.dev/learn-web-vitals/

---

**Quick Contact for Questions:**
- Check documentation in `/DIGITAL-MARKETING-GUIDE.md`
- Review performance tips in `/PERFORMANCE-OPTIMIZATION.md`
- Refer to this quick reference for common tasks
