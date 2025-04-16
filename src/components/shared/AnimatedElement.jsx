import { m } from 'framer-motion';
import { useAnimationContext } from '../../pages/_app';

/**
 * A reusable component that handles animations with fallbacks
 * 
 * @param {Object} props
 * @param {React.ReactNode} props.children - Child elements to animate
 * @param {string} props.className - CSS classes to apply
 * @param {string} props.animation - Animation preset to use ("fadeIn", "fadeInUp", etc.)
 * @param {number} props.delay - Delay before animation starts (in seconds)
 * @param {number} props.duration - Animation duration (in seconds)
 * @param {number} props.threshold - Viewport threshold for triggering animation (0-1)
 * @param {boolean} props.once - Whether animation should only play once
 * @param {string} props.as - HTML element or component to render as
 * @param {boolean} props.noFallback - If true, won't render until animations are ready
 */
const AnimatedElement = ({
  children,
  className = '',
  animation = 'fadeIn',
  delay = 0,
  duration = 0.6,
  threshold = 0.2,
  once = true,
  as = 'div',
  noFallback = false,
  ...props
}) => {
  const { animationsReady } = useAnimationContext();
  const Component = m[as] || m.div;

  const animations = {
    fadeIn: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 }
    },
    fadeInUp: {
      hidden: { opacity: 0, y: 30 },
      visible: { opacity: 1, y: 0 }
    },
    fadeInDown: {
      hidden: { opacity: 0, y: -30 },
      visible: { opacity: 1, y: 0 }
    },
    fadeInLeft: {
      hidden: { opacity: 0, x: 30 },
      visible: { opacity: 1, x: 0 }
    },
    fadeInRight: {
      hidden: { opacity: 0, x: -30 },
      visible: { opacity: 1, x: 0 }
    },
    zoomIn: {
      hidden: { opacity: 0, scale: 0.95 },
      visible: { opacity: 1, scale: 1 }
    },
    zoomOut: {
      hidden: { opacity: 0, scale: 1.05 },
      visible: { opacity: 1, scale: 1 }
    }
  };

  const selectedAnimation = animations[animation] || animations.fadeIn;

  if (!animationsReady && !noFallback) {
    const fallbackClass = `${className} animate-fallback animate-fallback-${animation}`;
    return <div className={fallbackClass} {...props}>{children}</div>;
  }

  return (
    <Component
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: threshold }}
      variants={{
        hidden: selectedAnimation.hidden,
        visible: {
          ...selectedAnimation.visible,
          transition: {
            duration,
            delay,
            ease: 'easeOut'
          }
        }
      }}
      className={className}
      {...props}
    >
      {children}
    </Component>
  );
};

export default AnimatedElement;