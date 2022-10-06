import React, { ReactNode, useContext, useEffect, useRef } from 'react';
import classNames from 'classnames';
import { NavigationContext } from 'components/Navigation/NavigationProvider';
import style from './PageContainer.module.scss';

export interface PageContainerProps {
  className?: string;
  children?: ReactNode;
}

const THRESHOLD = 100;

const PageContainer: React.FC<PageContainerProps> = ({ className, children }) => {
  const ref = useRef<HTMLDivElement>(null);
  const prevValue = useRef<number>(THRESHOLD);
  const { show, setShow } = useContext(NavigationContext);

  useEffect(() => {
    if (ref && ref.current) {
      const { current: currentRef } = ref;

      // const trigger = (current: number) => Math.abs(current - prevValue) > 100;

      const updateScrollDirection = () => {
        const currentPosition = currentRef.scrollTop;

        // if (trigger(current)) {
        if (currentPosition > prevValue.current) {
          if (show) setShow(false);
        } else {
          if (!show) setShow(true);
        }
        prevValue.current = currentPosition > THRESHOLD ? currentPosition : THRESHOLD;
        // }
      };
      currentRef.addEventListener('scroll', updateScrollDirection);
      return () => currentRef.removeEventListener('scroll', updateScrollDirection);
    }
  }, [show, setShow]);

  return (
    <div ref={ref} className={classNames(style.outer, className)}>
      <div className={style.inner}>{children}</div>
    </div>
  );
};

export default PageContainer;
