# GS Trans - Image Requirements Guide

## Required Images for Website

### 1. Company Logo
**File**: `public/images/logo.png`
**Size**: 512x512 px (PNG with transparent background)
**Description**: 
- Company logo with "GS Trans" or "Gamma Smart Trans" text
- Blue color theme (#1890ff) to match website
- Simple, modern, professional design
- Can include truck/transport icon
- Should work on both light and dark backgrounds

**Design Ideas**:
- Letter "G" with motion lines
- Truck icon integrated with company initials
- Abstract road/path design
- Modern sans-serif font with icon

---

### 2. Hero Section Images
**Location**: `public/images/hero/`
**Size**: 1920x1080 px (landscape)
**Quantity**: 3-5 images for carousel/rotation

#### hero-1.jpg - Main Banner
- Professional truck on highway
- Blue sky, clean modern aesthetic
- Can show GS Trans branding on vehicle
- High quality, bright, optimistic feel

#### hero-2.jpg - Technology Focus
- Mobile app interface showing booking screen
- Hand holding phone with GS Trans app
- Modern, tech-forward presentation
- Clean background

#### hero-3.jpg - City Transport
- Cargo delivery in urban setting
- Delivery vehicle in front of business/warehouse
- Professional driver/rider
- Daytime, clear visibility

#### hero-4.jpg - Wide Coverage
- Map visualization or aerial city view
- Network of roads/connections
- Can be graphic/illustration style
- Shows connectivity and reach

---

### 3. Service Section Images
**Location**: `public/images/services/`
**Size**: 800x600 px (4:3 ratio)

#### local-transport.jpg
- Small truck or tempo in city street
- Local delivery scene
- Urban environment
- Professional, clean vehicle

#### inter-city-freight.jpg
- Large truck on highway between cities
- Long-distance transport theme
- Highway/expressway setting
- Professional commercial vehicle

#### express-delivery.jpg
- Fast delivery vehicle (bike/small truck)
- Motion blur or speed indication
- Urgent/priority delivery feel
- Clock/time element optional

#### business-solutions.jpg
- Warehouse or business setting
- Multiple vehicles or loading area
- Professional B2B environment
- Business people with logistics theme

#### tracking-technology.jpg
- GPS tracking interface
- Phone showing live tracking
- Technology/innovation focus
- Modern, digital aesthetic

#### customer-service.jpg
- Customer support representative
- Friendly, helpful atmosphere
- Headset/phone/computer setup
- Professional office environment

---

### 4. About Us / Company Section
**Location**: `public/images/office/`
**Size**: 1200x800 px

#### office-exterior.jpg
- GS Trans office building
- Professional commercial building
- Clear signage
- Welcoming appearance

#### office-interior.jpg
- Modern office workspace
- Computers, desks, professional environment
- Team working together
- Clean, organized space

#### fleet.jpg
- Multiple GS Trans vehicles parked together
- Shows fleet size and variety
- Professional branding on vehicles
- Well-maintained appearance

---

### 5. Vehicle Images
**Location**: `public/images/vehicles/`
**Size**: 800x600 px each

#### bike.jpg
- Two-wheeler delivery bike
- Rider in uniform/helmet
- GS Trans branding
- Professional appearance

#### auto.jpg
- Auto-rickshaw for cargo
- Three-wheeler transport vehicle
- Good condition, clean
- Suitable for small cargo

#### tempo.jpg
- Small truck/tempo
- Medium cargo capacity
- Professional commercial vehicle
- GS Trans branding

#### truck.jpg
- Full-size cargo truck
- Large capacity freight vehicle
- Highway-ready
- Professional appearance

---

### 6. Team Photos (Optional)
**Location**: `public/images/team/`
**Size**: 400x400 px (square, headshots)

#### ceo.jpg
- Professional headshot
- Business attire
- Neutral background
- Confident, approachable expression

#### team-member-1.jpg, team-member-2.jpg, etc.
- Key team members
- Uniform style across all photos
- Professional appearance
- Same background/lighting

---

### 7. App Screenshots
**Location**: `public/images/app/`
**Size**: 1080x1920 px (mobile screen ratio)

#### customer-app-home.jpg
- Customer app home screen
- Booking interface
- Clean UI showing key features

#### customer-app-tracking.jpg
- Live tracking screen
- Map with route animation
- Real-time updates

#### rider-app-dashboard.jpg
- Rider app interface
- Earnings dashboard
- Professional driver view

---

### 8. Icons & Graphics
**Location**: `public/images/icons/`
**Size**: 256x256 px (PNG with transparency)

#### fast-delivery-icon.png
- Speed/clock icon
- Fast delivery concept

#### secure-icon.png
- Shield/lock icon
- Security concept

#### tracking-icon.png
- GPS/location pin icon
- Tracking concept

#### support-icon.png
- Headset/help icon
- Customer support concept

---

## Quick Solutions for Images

### Option 1: Free Stock Photos
Use these websites for royalty-free transport/logistics images:
- **Unsplash**: https://unsplash.com/s/photos/truck-transport
- **Pexels**: https://pexels.com/search/logistics
- **Pixabay**: https://pixabay.com/images/search/delivery-truck
- **Freepik**: https://freepik.com (free with attribution)

### Option 2: AI Image Generation
Use these tools to generate custom images:
- **Microsoft Bing Image Creator**: https://bing.com/create (Free)
- **Leonardo.ai**: https://leonardo.ai (Free tier available)
- **Ideogram**: https://ideogram.ai (Free tier)

**Prompt Examples**:
- "Professional blue cargo truck on highway, modern logistics, sunny day, high quality photo"
- "Mobile app interface for transport booking, clean UI, blue color scheme, professional design"
- "Delivery rider with motorcycle, professional uniform, urban setting, friendly appearance"

### Option 3: Placeholder Images (Temporary)
I can create simple placeholder images with text labels for initial development. These can be replaced with professional images later.

### Option 4: Graphic Design Services
- **Canva**: https://canva.com (Easy templates)
- **Figma**: https://figma.com (Professional design)
- **Fiverr**: Hire a designer for $20-50 for complete package

---

## Priority Order

### Must Have (Critical for Launch):
1. Company logo
2. One hero banner image
3. 3-4 service images

### Should Have (Important):
4. Vehicle images (at least 2)
5. App screenshots (2-3)
6. Office/fleet image

### Nice to Have (Can add later):
7. Team photos
8. Multiple hero banners
9. Custom icons
10. Detailed graphics

---

## Color Guidelines
- Primary Blue: #1890ff
- Use blue tones in images where possible
- Professional, clean, modern aesthetic
- Bright, optimistic lighting
- High contrast for web visibility

## Image Optimization
After obtaining images, optimize them:
```bash
# Install sharp for image optimization
npm install sharp-cli -g

# Optimize images
sharp-cli --input public/images/**/*.jpg --output public/images/ --quality 85
```

---

## Notes
- All images should be web-optimized (compressed)
- Use descriptive filenames
- Maintain consistent style across all images
- Ensure licensing allows commercial use
- Credit photographers if required by license
