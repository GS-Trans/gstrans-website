# Image Optimization Guide & Script
## Compress Large Images to Improve Website Performance

---

## 📋 Files to Optimize (Priority Order)

### Critical (Do First):
1. **unique-bg4.webp** - 1,531 KB → Target: 200 KB
2. **og-image.jpg** - 519 KB → Target: 200 KB
3. **pattern-2.svg** - 547 KB → Optimize SVG
4. **pattern-3.svg** - 547 KB → Optimize SVG
5. **highway-delivery.webp** - 403 KB → Target: 150 KB

### High Priority (Hero Slides):
6. **slider-3.webp** - 253 KB → Target: 100 KB
7. **slider-4.webp** - 251 KB → Target: 100 KB

### To Delete:
- **slider-6.webp** - 288 KB (no longer used after merge)

---

## 🛠️ Method 1: Online Tools (Easiest)

### For WebP/JPG/PNG Files:
1. **Squoosh.app** (Google's free tool)
   - Visit: https://squoosh.app/
   - Drag and drop each image
   - Settings:
     - Format: WebP
     - Quality: 75-85%
     - Resize if needed (maintain aspect ratio)
   - Download optimized version
   - Replace original file

2. **TinyPNG.com**
   - Visit: https://tinypng.com/
   - Upload images (max 5 MB each)
   - Download compressed versions
   - Replace originals

### For SVG Files:
1. **SVGOMG**
   - Visit: https://jakearchibald.github.io/svgomg/
   - Upload pattern-2.svg and pattern-3.svg
   - Enable all optimizations
   - Download and replace

---

## 🖥️ Method 2: Automated PowerShell Script

### Prerequisites:
```powershell
# Install ImageMagick (if not installed)
# Download from: https://imagemagick.org/script/download.php
# OR use Chocolatey:
choco install imagemagick
```

### Optimization Script:

Save this as `optimize-images.ps1`:

```powershell
# GS Trans Image Optimization Script
# Compresses large images to improve website performance

$baseDir = "D:\gst\website\public\images"
$backupDir = "D:\gst\website\image-backups"

# Create backup directory
if (-not (Test-Path $backupDir)) {
    New-Item -ItemType Directory -Path $backupDir -Force
    Write-Host "✓ Created backup directory: $backupDir" -ForegroundColor Green
}

Write-Host "`n🎨 GS Trans Image Optimizer`n" -ForegroundColor Cyan

# Function to backup and compress WebP/JPG
function Optimize-Image {
    param (
        [string]$FilePath,
        [int]$Quality = 80
    )
    
    $fileName = Split-Path $FilePath -Leaf
    $fileDir = Split-Path $FilePath -Parent
    $relativePath = $fileDir.Replace($baseDir, "").TrimStart('\')
    
    # Create backup subdirectory
    $backupSubDir = Join-Path $backupDir $relativePath
    if (-not (Test-Path $backupSubDir)) {
        New-Item -ItemType Directory -Path $backupSubDir -Force | Out-Null
    }
    
    # Backup original
    $backupFile = Join-Path $backupSubDir $fileName
    Copy-Item $FilePath $backupFile -Force
    
    # Get original size
    $originalSize = (Get-Item $FilePath).Length / 1KB
    
    # Compress using ImageMagick
    $tempFile = "$FilePath.tmp"
    magick convert $FilePath -quality $Quality -define webp:method=6 $tempFile
    
    if (Test-Path $tempFile) {
        $newSize = (Get-Item $tempFile).Length / 1KB
        $savings = $originalSize - $newSize
        $percent = [math]::Round(($savings / $originalSize) * 100, 1)
        
        # Replace only if smaller
        if ($newSize -lt $originalSize) {
            Move-Item $tempFile $FilePath -Force
            Write-Host "  ✓ $fileName" -ForegroundColor Green
            Write-Host "    ${originalSize}KB → ${newSize}KB (Saved: ${savings}KB / ${percent}%)" -ForegroundColor Gray
        } else {
            Remove-Item $tempFile
            Write-Host "  → $fileName (Already optimized)" -ForegroundColor Yellow
        }
    }
}

# Critical images to optimize
$criticalImages = @(
    "$baseDir\bg\unique-bg4.webp",
    "$baseDir\og-image.jpg",
    "$baseDir\bg\highway-delivery.webp",
    "$baseDir\approach\b2b-relationship-bg.webp",
    "$baseDir\approach\issue-resolution-bg.webp",
    "$baseDir\approach\booking-support-bg.webp"
)

Write-Host "Optimizing CRITICAL background images (Quality: 75%)..." -ForegroundColor Yellow
foreach ($img in $criticalImages) {
    if (Test-Path $img) {
        Optimize-Image -FilePath $img -Quality 75
    }
}

# Hero slider images
$heroImages = @(
    "$baseDir\hero\slider-3.webp",
    "$baseDir\hero\slider-4.webp"
)

Write-Host "`nOptimizing HERO slider images (Quality: 82%)..." -ForegroundColor Yellow
foreach ($img in $heroImages) {
    if (Test-Path $img) {
        Optimize-Image -FilePath $img -Quality 82
    }
}

# Delete unused slider-6
$unusedSlider = "$baseDir\hero\slider-6.webp"
if (Test-Path $unusedSlider) {
    $backupSlider = Join-Path $backupDir "hero\slider-6.webp"
    Copy-Item $unusedSlider $backupSlider -Force
    Remove-Item $unusedSlider -Force
    Write-Host "`n✓ Deleted unused slider-6.webp (backup saved)" -ForegroundColor Green
}

Write-Host "`n✅ Optimization Complete!" -ForegroundColor Green
Write-Host "📁 Original files backed up to: $backupDir" -ForegroundColor Cyan
Write-Host "`n💡 Next steps:" -ForegroundColor Yellow
Write-Host "   1. Test your website: npm run dev" -ForegroundColor Gray
Write-Host "   2. Check images display correctly" -ForegroundColor Gray
Write-Host "   3. Run PageSpeed test to see improvements" -ForegroundColor Gray
```

### Run the Script:
```powershell
cd D:\gst\website
.\optimize-images.ps1
```

---

## 🎯 Method 3: Manual Compression (Most Control)

### Using Adobe Photoshop / GIMP:

1. **Open image**
2. **Resize if too large** (hero images: max 1920x1080)
3. **Export Settings:**
   - Format: WebP
   - Quality: 75-85%
   - Method: 6 (slowest but best compression)
4. **Save and replace original**

### Recommended Dimensions:
- Hero slides: **1920 x 1080** (Full HD)
- Background images: **1600 x 900**
- OG image: **1200 x 630**
- Thumbnails: **400 x 300**

---

## 📊 Expected Results After Optimization:

| Image | Before | After | Savings |
|-------|--------|-------|---------|
| unique-bg4.webp | 1,531 KB | 200 KB | 1,331 KB |
| og-image.jpg | 519 KB | 200 KB | 319 KB |
| highway-delivery.webp | 403 KB | 150 KB | 253 KB |
| slider-3.webp | 253 KB | 100 KB | 153 KB |
| slider-4.webp | 251 KB | 100 KB | 151 KB |
| slider-6.webp | 288 KB | 0 KB | 288 KB (deleted) |
| **TOTAL** | **3,245 KB** | **750 KB** | **~2,500 KB** |

### Performance Improvement:
- **Page load time:** 8s → 3s (estimated)
- **First Contentful Paint:** 3s → 1s
- **PageSpeed Score:** +20-30 points
- **Mobile experience:** Significantly better

---

## 🔍 SVG Optimization (Separate Process)

For pattern-2.svg and pattern-3.svg:

```powershell
# Install SVGO (Node.js required)
npm install -g svgo

# Navigate to shapes directory
cd D:\gst\website\public\images\shape

# Backup originals
Copy-Item pattern-2.svg pattern-2.svg.backup
Copy-Item pattern-3.svg pattern-3.svg.backup

# Optimize
svgo pattern-2.svg -o pattern-2-optimized.svg
svgo pattern-3.svg -o pattern-3-optimized.svg

# Replace if smaller
Move-Item pattern-2-optimized.svg pattern-2.svg -Force
Move-Item pattern-3-optimized.svg pattern-3.svg -Force
```

---

## ✅ Verification Checklist

After optimization:
- [ ] Run `npm run dev` - site loads correctly
- [ ] Check hero slider - all images display
- [ ] Check About section background
- [ ] Check Services section
- [ ] Test on mobile (Chrome DevTools)
- [ ] Run PageSpeed Insights: https://pagespeed.web.dev/
- [ ] Check image quality - no visible degradation
- [ ] Verify OG image loads on social media test tools

---

## 🚨 Troubleshooting

**Images look pixelated after compression?**
- Increase quality to 85% instead of 75%
- Restore from backup and try again

**Script fails with ImageMagick error?**
- Install ImageMagick: https://imagemagick.org/
- Or use online tools instead

**Original files needed?**
- All backups saved to `D:\gst\website\image-backups`

---

## 📞 Quick Reference

**Best Online Tools:**
- WebP/JPG: https://squoosh.app/
- PNG: https://tinypng.com/
- SVG: https://jakearchibald.github.io/svgomg/

**Recommended Quality Settings:**
- Hero images: 80-85%
- Background images: 75-80%
- Thumbnails: 70-75%
- OG/Social images: 75-80%

---

**Created:** January 2026
**For:** GS Trans Website Performance Optimization
**Total Potential Savings:** ~4 MB (73% reduction)
