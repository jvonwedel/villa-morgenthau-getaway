#!/bin/bash

# Create WebP versions of the placeholder images
echo "Creating WebP versions of placeholder images..."
ffmpeg -i public/lovable-uploads/newemilydesktop-placeholder.jpg -c:v libwebp -quality 80 -compression_level 6 public/lovable-uploads/newemilydesktop-placeholder.webp
ffmpeg -i public/lovable-uploads/emilymobile-placeholder.jpg -c:v libwebp -quality 80 -compression_level 6 public/lovable-uploads/emilymobile-placeholder.webp

echo "WebP conversion complete! Here are the file sizes:"
ls -lh public/lovable-uploads/*placeholder*
