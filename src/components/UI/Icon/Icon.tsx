import React, { ReactNode } from 'react';
import classNames from 'classnames';
import { ExternalClassNameType } from 'types';
import style from './Icon.module.scss';

interface IconProps extends ExternalClassNameType {
  icon: ReactNode;
  path?: 'currentColor';
  stroke?: 'currentColor';
  ellipse?: 'currentColor';
  onClick?(): void;
}

const Icon: React.FC<IconProps> = ({ icon, path, stroke, ellipse, className, onClick }) => (
  <div
    role="presentation"
    className={classNames(
      style.icon,
      {
        [style[`path_${path}`]]: path,
        [style[`stroke_${stroke}`]]: stroke,
        [style[`ellipse_${ellipse}`]]: ellipse,
      },
      className,
    )}
    onClick={onClick}
  >
    {icon}
  </div>
);

export default Icon;
