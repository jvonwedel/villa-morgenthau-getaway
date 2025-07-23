import { useState, useEffect } from 'react';

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  placeholderSrc?: string;
  priority?: boolean;
}

/**
 * OptimizedImage component for improved performance
 * - Supports blur-up loading with placeholders
 * - Adds proper loading attributes based on priority
 * - Implements modern image loading best practices
 */
export function OptimizedImage({
  src,
  alt,
  width,
  height,
  className = '',
  placeholderSrc,
  priority = false,
  ...props
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [supportsWebP, setSupportsWebP] = useState(false);

  // Check WebP support
  useEffect(() => {
    const checkWebP = async () => {
      const webpSupport = document.createElement('canvas')
        .toDataURL('image/webp')
        .indexOf('data:image/webp') === 0;
      setSupportsWebP(webpSupport);
    };
    checkWebP();
  }, []);

  // Convert image path to WebP if supported
  const getOptimizedSrc = (imagePath: string) => {
    if (!supportsWebP || !imagePath) return imagePath;
    
    // Only convert JPG/PNG images to WebP
    if (imagePath.match(/\.(jpe?g|png)$/i)) {
      return imagePath.replace(/\.(jpe?g|png)$/i, '.webp');
    }
    
    return imagePath;
  };

  const optimizedSrc = getOptimizedSrc(src);
  const optimizedPlaceholder = placeholderSrc ? getOptimizedSrc(placeholderSrc) : undefined;

  return (
    <div className={`relative overflow-hidden ${className}`} style={{ width, height }}>
      {placeholderSrc && (
        <img
          src={optimizedPlaceholder}
          alt={alt}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
            isLoaded ? 'opacity-0' : 'opacity-100'
          }`}
          width={width}
          height={height}
          loading="eager"
          aria-hidden="true"
        />
      )}
      <img
        src={optimizedSrc}
        alt={alt}
        className={`w-full h-full object-cover transition-opacity duration-300 ${
          placeholderSrc ? (isLoaded ? 'opacity-100' : 'opacity-0') : ''
        }`}
        width={width}
        height={height}
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : 'auto'}
        decoding="async"
        onLoad={() => setIsLoaded(true)}
        {...props}
      />
    </div>
  );
}
