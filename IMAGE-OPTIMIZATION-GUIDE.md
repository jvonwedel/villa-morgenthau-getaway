# Image Optimization Guide for Villa Morgenthau Website

This guide outlines the image optimization strategies implemented on the Villa Morgenthau website to ensure fast loading times and optimal user experience.

## Optimization Techniques Implemented

### 1. GIF to Video Conversion
- Large GIF files have been converted to MP4 videos (95% file size reduction)
- Original: Desktop GIF (82MB), Mobile GIF (56MB)
- Optimized: Desktop MP4 (3.9MB), Mobile MP4 (3.6MB)

### 2. WebP Format Support
- All JPG/PNG images have WebP versions available
- Automatic format selection based on browser support
- 25-35% smaller file sizes compared to JPG/PNG

### 3. Blur-up Loading Technique
- Small placeholder images load first (15-20KB)
- Full images/videos fade in when loaded
- Prevents layout shifts and improves perceived performance

### 4. Responsive Images
- Different image sizes for mobile and desktop
- Proper width/height attributes to prevent layout shifts
- Optimized dimensions for each device type

### 5. Preloading Critical Assets
- Hero section images/videos are preloaded
- Resource hints via `<link rel="preload">`
- Prioritized loading of above-the-fold content

## How to Use the Optimization Components

### OptimizedImage Component

Use the `OptimizedImage` component for all images on the website:

```tsx
import { OptimizedImage } from '../ui/optimized-image';

// Basic usage
<OptimizedImage 
  src="/path/to/image.jpg" 
  alt="Description" 
  width={800} 
  height={600} 
/>

// With placeholder for blur-up effect
<OptimizedImage 
  src="/path/to/image.jpg" 
  alt="Description" 
  width={800} 
  height={600}
  placeholderSrc="/path/to/placeholder.jpg"
  priority={true} // For above-the-fold images
/>
```

### Video Optimization

For video content (especially replacing large GIFs):

```tsx
<video 
  autoPlay
  muted
  loop
  playsInline
  className="w-full h-full object-cover"
  poster="/path/to/placeholder.jpg"
  preload="auto"
>
  <source 
    src="/path/to/video.mp4" 
    type="video/mp4" 
  />
</video>
```

## Adding New Images to the Website

When adding new images to the website:

1. Optimize the original image using a tool like [Squoosh](https://squoosh.app/) or [TinyPNG](https://tinypng.com/)
2. Place the optimized image in the appropriate directory under `/public`
3. Run the conversion script to generate WebP versions:
   ```bash
   ./convert-all-images.sh
   ```
4. Use the `OptimizedImage` component to display the image

## Creating Placeholder Images

For blur-up loading effect:

1. Create a small version (around 20-40KB) of the original image
2. Reduce dimensions to approximately 10% of the original
3. Apply slight blur if desired
4. Save with the naming pattern: `original-filename-placeholder.jpg`

## Performance Monitoring

The website includes built-in performance monitoring that logs metrics to the console in development mode. Check the browser console to see:

- Time to First Byte (TTFB)
- First Contentful Paint (FCP)
- Largest Contentful Paint (LCP)
- Image/video resource loading times

## Maintenance

- Run `./convert-all-images.sh` whenever new images are added
- Use `OptimizedImage` component for all new images
- Create placeholder images for important above-the-fold content
- Consider converting large GIFs to MP4 videos

By following these guidelines, the Villa Morgenthau website will maintain optimal loading performance and provide an excellent user experience across all devices.
