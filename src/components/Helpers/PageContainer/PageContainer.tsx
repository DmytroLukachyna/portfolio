import React, { ReactNode } from 'react';
import classNames from 'classnames';
import style from './PageContainer.module.scss';

export interface PageContainerProps {
  className?: string;
  children?: ReactNode;
}

const PageContainer: React.FC<PageContainerProps> = ({ className, children }) => (
  <div className={classNames(style.outer, className)}>
    <div className={style.inner}>{children}</div>
  </div>
);

export default PageContainer;
