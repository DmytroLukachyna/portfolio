import React from 'react';
import classNames from 'classnames';
import { ExternalClassNameType } from 'types';
import style from './Loader.module.scss';

const Loader: React.FC<ExternalClassNameType> = ({ className }) => (
  <span className={classNames(style.component, className)}>.</span>
);

export default Loader;
