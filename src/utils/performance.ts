// Performance monitoring utilities

/**
 * Measure and log performance metrics
 */
export const measurePerformance = {
  /**
   * Measure the time it takes for a function to execute
   */
  measureFunction: <T extends (...args: unknown[]) => unknown>(
    fn: T,
    label: string
  ): T => {
    return ((...args: Parameters<T>) => {
      const start = performance.now();
      const result = fn(...args);
      const end = performance.now();
      
      if (import.meta.env.DEV) {
        console.log(`⚡ ${label}: ${(end - start).toFixed(2)}ms`);
      }
      
      return result;
    }) as T;
  },

  /**
   * Measure async function performance
   */
  measureAsyncFunction: <T extends (...args: unknown[]) => Promise<unknown>>(
    fn: T,
    label: string
  ): T => {
    return (async (...args: Parameters<T>) => {
      const start = performance.now();
      const result = await fn(...args);
      const end = performance.now();
      
      if (import.meta.env.DEV) {
        console.log(`⚡ ${label}: ${(end - start).toFixed(2)}ms`);
      }
      
      return result;
    }) as T;
  },

  /**
   * Log Core Web Vitals when available
   */
  logWebVitals: () => {
    if (typeof window === 'undefined') return;

    // Log when page is fully loaded
    window.addEventListener('load', () => {
      // Largest Contentful Paint
      new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        if (import.meta.env.DEV) {
          console.log('🎯 LCP:', lastEntry.startTime.toFixed(2) + 'ms');
        }
      }).observe({ entryTypes: ['largest-contentful-paint'] });

      // First Input Delay
      new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (import.meta.env.DEV) {
            console.log('👆 FID:', (entry as PerformanceEventTiming).processingStart - entry.startTime + 'ms');
          }
        });
      }).observe({ entryTypes: ['first-input'] });

      // Cumulative Layout Shift
      new PerformanceObserver((list) => {
        let clsValue = 0;
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (!(entry as PerformanceEntry & { hadRecentInput?: boolean }).hadRecentInput) {
            clsValue += (entry as PerformanceEntry & { value: number }).value;
          }
        });
        if (import.meta.env.DEV) {
          console.log('📐 CLS:', clsValue.toFixed(4));
        }
      }).observe({ entryTypes: ['layout-shift'] });
    });
  },

  /**
   * Simple memory usage logger (development only)
   */
  logMemoryUsage: () => {
    if (import.meta.env.DEV && 'memory' in performance) {
      const memory = (performance as Performance & { memory?: { usedJSHeapSize: number; totalJSHeapSize: number; jsHeapSizeLimit: number } }).memory;
      if (memory) {
        console.log('💾 Memory Usage:', {
          used: `${(memory.usedJSHeapSize / 1048576).toFixed(2)} MB`,
          total: `${(memory.totalJSHeapSize / 1048576).toFixed(2)} MB`,
          limit: `${(memory.jsHeapSizeLimit / 1048576).toFixed(2)} MB`
        });
      }
    }
  }
};

/**
 * Debounce function to limit function calls
 */
export function debounce<T extends (...args: unknown[]) => unknown>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

/**
 * Throttle function to limit function calls
 */
export function throttle<T extends (...args: unknown[]) => unknown>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

/**
 * Initialize performance monitoring
 */
export const initPerformanceMonitoring = () => {
  if (import.meta.env.DEV) {
    measurePerformance.logWebVitals();
    
    // Log memory usage every 30 seconds in development
    setInterval(() => {
      measurePerformance.logMemoryUsage();
    }, 30000);
  }
};