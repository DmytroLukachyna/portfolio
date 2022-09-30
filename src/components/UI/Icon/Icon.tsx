import React, { ReactNode } from 'react';
import classNames from 'classnames';
// import { Display } from 'Components/types/gridTypes';
import style from './Icon.module.scss';

export interface IconProps {
  icon: ReactNode;
  path?: 'currentColor';
  stroke?: 'currentColor';
  ellipse?: 'currentColor';
  // display?: Display;
  // cursor?: 'default' | 'pointer' | 'move' | 'inherit';
  // transition?: 'inherit' | 'unset';
  // clickThrough?: boolean;
  className?: string;
  onClick?(): void;
}

const Icon: React.FC<IconProps> = ({
  icon,
  path,
  stroke,
  ellipse,
  // display = 'inline-flex',
  // cursor,
  // transition,
  // clickThrough,
  className,
  onClick,
}) => (
  <div
    role="presentation"
    className={classNames(
      style.icon,
      // style[`display_${display}`],
      {
        [style[`path_${path}`]]: path,
        [style[`stroke_${stroke}`]]: stroke,
        [style[`ellipse_${ellipse}`]]: ellipse,
        //   [style[`cursor_${cursor}`]]: cursor,
        //   [style[`transition_${transition}`]]: transition,
        //   [style.clickThrough]: clickThrough,
      },
      className,
    )}
    onClick={onClick}
  >
    {icon}
  </div>
);

export default Icon;
