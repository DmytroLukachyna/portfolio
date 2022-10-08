import { NavigationContext } from 'components/Navigation/NavigationProvider';
import { useContext, useEffect, useRef } from 'react';
import useWindowSize from './useWindowSize';

interface TestProps {
  currentRef: HTMLElement | null;
  threshold?: number;
}

export default function useToggleShowNavigation({ currentRef, threshold = 100 }: TestProps) {
  const prevValue = useRef<number>(threshold);
  const { show, setShow } = useContext(NavigationContext);
  const [width] = useWindowSize();

  useEffect(() => {
    if (currentRef && width < 1200) {
      // const trigger = (current: number) => Math.abs(current - prevValue) > 100;

      const updateScrollDirection = () => {
        const currentPosition = currentRef.scrollTop;

        // if (trigger(current)) {
        if (currentPosition > prevValue.current) {
          if (show) setShow(false);
        } else {
          if (!show) setShow(true);
        }
        prevValue.current = currentPosition > threshold ? currentPosition : threshold;
        // }
      };
      currentRef.addEventListener('scroll', updateScrollDirection);
      return () => currentRef.removeEventListener('scroll', updateScrollDirection);
    }
  }, [show, setShow, currentRef, threshold, width]);
}
