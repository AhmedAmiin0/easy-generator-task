import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';

interface RouteTransitionProps {
  children: React.ReactNode;
  duration?: number;
  type?: 'fade' | 'slide' | 'scale';
}

export const RouteTransition: React.FC<RouteTransitionProps> = ({ 
  children, 
  duration = 300,
  type = 'fade'
}) => {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransitionStage] = useState<'idle' | 'exiting' | 'entering'>('idle');

  useEffect(() => {
    if (location.pathname !== displayLocation.pathname) {
      setTransitionStage('exiting');
      
      const exitTimer = setTimeout(() => {
        setDisplayLocation(location);
        setTransitionStage('entering');
        
        const enterTimer = setTimeout(() => {
          setTransitionStage('idle');
        }, 50);
        
        return () => clearTimeout(enterTimer);
      }, duration / 2);

      return () => clearTimeout(exitTimer);
    }
  }, [location, displayLocation, duration]);

  const getTransitionClasses = () => {
    const baseClasses = `route-transition`;
    
    switch (transitionStage) {
      case 'exiting':
        switch (type) {
          case 'fade':
            return `${baseClasses} opacity-0`;
          case 'slide':
            return `${baseClasses} opacity-0 transform translate-x-4`;
          case 'scale':
            return `${baseClasses} opacity-0 transform scale-95`;
          default:
            return `${baseClasses} opacity-0`;
        }
      case 'entering':
        switch (type) {
          case 'fade':
            return `${baseClasses} opacity-0`;
          case 'slide':
            return `${baseClasses} opacity-0 transform -translate-x-4`;
          case 'scale':
            return `${baseClasses} opacity-0 transform scale-105`;
          default:
            return `${baseClasses} opacity-0`;
        }
      case 'idle':
      default:
        return `${baseClasses} opacity-100 transform translate-x-0 scale-100`;
    }
  };

  return (
    <div className={getTransitionClasses()}>
      {children}
    </div>
  );
};

export default RouteTransition; 