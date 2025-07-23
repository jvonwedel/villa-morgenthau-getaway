#!/bin/bash

# Create directory for optimized assets if it doesn't exist
mkdir -p public/lovable-uploads/optimized

# Convert desktop GIF to MP4
echo "Converting desktop GIF to MP4..."
ffmpeg -i public/lovable-uploads/newemilydesktop.gif -vf "scale=1920:-1" -movflags faststart -pix_fmt yuv420p -vcodec libx264 -crf 23 -preset medium -an public/lovable-uploads/newemilydesktop.mp4

# Convert mobile GIF to MP4
echo "Converting mobile GIF to MP4..."
# Force dimensions to be even numbers for yuv420p compatibility
ffmpeg -i public/lovable-uploads/emilymobile.gif -vf "scale=640:-2" -movflags faststart -pix_fmt yuv420p -vcodec libx264 -crf 23 -preset medium -an public/lovable-uploads/emilymobile.mp4

# Create placeholder images (tiny thumbnails for blur-up effect)
echo "Creating placeholder images..."
ffmpeg -i public/lovable-uploads/newemilydesktop.gif -vframes 1 -vf "scale=480:-1" -q:v 10 public/lovable-uploads/newemilydesktop-placeholder.jpg
ffmpeg -i public/lovable-uploads/emilymobile.gif -vframes 1 -vf "scale=320:-1" -q:v 10 public/lovable-uploads/emilymobile-placeholder.jpg

echo "Optimization complete! Here are the file sizes:"
ls -lh public/lovable-uploads/newemilydesktop.gif public/lovable-uploads/newemilydesktop.mp4 public/lovable-uploads/newemilydesktop-placeholder.jpg
ls -lh public/lovable-uploads/emilymobile.gif public/lovable-uploads/emilymobile.mp4 public/lovable-uploads/emilymobile-placeholder.jpg
