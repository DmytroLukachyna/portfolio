import React from 'react';
import classNames from 'classnames';
import style from './Loader.module.scss';

export interface LoaderProps {
  className?: string;
}

const Loader: React.FC<LoaderProps> = ({ className }) => (
  <span className={classNames(style.component, className)}>
    Loading... Loading... Loading... Loading... Loading... Loading... Loading... Loading...
    Loading... Loading... Loading... Loading... Loading... Loading... Loading... Loading...
    Loading... Loading... Loading... Loading... Loading...
  </span>
);

export default Loader;
