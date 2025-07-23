/**
 * Performance monitoring utilities to measure and report website performance metrics
 */

// Types for performance metrics
interface PerformanceMetrics {
  timeToFirstByte?: number;
  firstContentfulPaint?: number;
  largestContentfulPaint?: number;
  firstInputDelay?: number;
  cumulativeLayoutShift?: number;
  totalBlockingTime?: number;
  speedIndex?: number;
  resourceLoadTimes: {
    name: string;
    type: string;
    duration: number;
    size?: number;
  }[];
}

/**
 * Collects and returns core web vital metrics
 */
export const collectPerformanceMetrics = (): PerformanceMetrics => {
  const metrics: PerformanceMetrics = {
    resourceLoadTimes: []
  };
  
  // Only run in browser environment
  if (typeof window === 'undefined' || !window.performance) {
    return metrics;
  }
  
  try {
    // Get navigation timing data
    const navigationTiming = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (navigationTiming) {
      metrics.timeToFirstByte = navigationTiming.responseStart - navigationTiming.requestStart;
    }
    
    // Get resource timing data
    const resourceEntries = performance.getEntriesByType('resource') as PerformanceResourceTiming[];
    metrics.resourceLoadTimes = resourceEntries.map(entry => ({
      name: entry.name,
      type: entry.initiatorType,
      duration: entry.duration,
      size: entry.transferSize || entry.encodedBodySize
    }));
    
    // Get paint timing data
    const paintEntries = performance.getEntriesByType('paint');
    const firstPaint = paintEntries.find(entry => entry.name === 'first-paint');
    const firstContentfulPaint = paintEntries.find(entry => entry.name === 'first-contentful-paint');
    
    if (firstContentfulPaint) {
      metrics.firstContentfulPaint = firstContentfulPaint.startTime;
    }
    
    // Largest Contentful Paint via PerformanceObserver
    if ('PerformanceObserver' in window) {
      // This is just setup - the actual measurement happens when LCP occurs
      const lcpObserver = new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        const lastEntry = entries[entries.length - 1];
        metrics.largestContentfulPaint = lastEntry.startTime;
      });
      
      // Start observing LCP
      lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true });
    }
    
    return metrics;
  } catch (error) {
    console.error('Error collecting performance metrics:', error);
    return metrics;
  }
};

/**
 * Logs performance metrics to console
 */
export const logPerformanceMetrics = () => {
  // Wait for page to fully load
  window.addEventListener('load', () => {
    // Wait a bit to ensure metrics are collected
    setTimeout(() => {
      const metrics = collectPerformanceMetrics();
      
      console.group('📊 Performance Metrics');
      console.log('Time to First Byte:', metrics.timeToFirstByte?.toFixed(2), 'ms');
      console.log('First Contentful Paint:', metrics.firstContentfulPaint?.toFixed(2), 'ms');
      console.log('Largest Contentful Paint:', metrics.largestContentfulPaint?.toFixed(2), 'ms');
      
      // Log image resource loading times
      const imageResources = metrics.resourceLoadTimes
        .filter(resource => resource.type === 'img' || resource.name.match(/\.(jpe?g|png|gif|webp|mp4)$/i))
        .sort((a, b) => b.duration - a.duration);
      
      console.group('🖼️ Image/Video Resource Loading Times');
      imageResources.forEach(resource => {
        const size = resource.size ? `(${(resource.size / 1024).toFixed(2)} KB)` : '';
        console.log(`${resource.name.split('/').pop()}: ${resource.duration.toFixed(2)}ms ${size}`);
      });
      console.groupEnd();
      
      console.groupEnd();
    }, 3000);
  });
};

/**
 * Initialize performance monitoring
 */
export const initPerformanceMonitoring = () => {
  if (process.env.NODE_ENV !== 'production') {
    logPerformanceMetrics();
  }
};
