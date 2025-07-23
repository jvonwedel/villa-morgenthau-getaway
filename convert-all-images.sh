#!/bin/bash

# Script to convert all JPG and PNG images to WebP format
# This preserves the original files and creates WebP versions alongside them

echo "Converting all JPG and PNG images to WebP format..."

# Find all JPG and PNG files in the public directory
find public -type f \( -name "*.jpg" -o -name "*.jpeg" -o -name "*.png" \) | while read file; do
  # Get the output filename by replacing the extension with .webp
  output="${file%.*}.webp"
  
  # Skip if WebP version already exists
  if [ -f "$output" ]; then
    echo "Skipping $file (WebP version already exists)"
    continue
  fi
  
  echo "Converting $file to WebP..."
  
  # Convert the image to WebP with 80% quality (good balance between quality and file size)
  ffmpeg -i "$file" -c:v libwebp -quality 80 -compression_level 6 "$output"
done

echo "Conversion complete!"
echo "Original files have been preserved, and WebP versions are now available."
echo "Use the OptimizedImage component to automatically serve WebP to supported browsers."
