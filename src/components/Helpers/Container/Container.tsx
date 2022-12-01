import React, { ReactNode } from 'react';
import classNames from 'classnames';
import type * as LayoutTypes from 'types/layoutTypes';
import { ExternalClassNameType } from 'types';
import style from './Container.module.scss';

interface ContainerProps extends ExternalClassNameType {
  display?: LayoutTypes.Display;
  position?: LayoutTypes.Position;
  flexdirection?: LayoutTypes.FlexDirection;
  justifycontent?: LayoutTypes.JustifyContent;
  alignitems?: LayoutTypes.AlignItems;
  aligncontent?: LayoutTypes.AlignContent;
  alignself?: LayoutTypes.AlignSelf;
  flexwrap?: LayoutTypes.FlexWrap;
  flexgrow?: LayoutTypes.FlexGrow;
  gap?: LayoutTypes.Gap;
  overflow?: LayoutTypes.Overflow;
  fullWidth?: boolean;
  fullHeight?: boolean;
  children?: ReactNode;
}

const Container: React.FC<ContainerProps> = ({
  display = 'flex',
  position,
  flexdirection,
  justifycontent,
  alignitems,
  aligncontent,
  alignself,
  flexwrap,
  flexgrow,
  gap,
  overflow,
  fullWidth,
  fullHeight,
  className,
  children,
}) => {
  const isFlex = display === 'flex' || display === 'inline-flex';
  const isGrid = display === 'grid' || display === 'inline-grid';
  return (
    <div
      className={classNames(
        style.container,
        style[`display_${display}`],
        {
          [style[`position_${position}`]]: position,
          [style[`flex-direction_${flexdirection}`]]: isFlex && flexdirection,
          [style[`justify-content_${justifycontent}`]]: (isFlex || isGrid) && justifycontent,
          [style[`align-items_${alignitems}`]]: (isFlex || isGrid) && alignitems,
          [style[`align-content_${aligncontent}`]]: (isFlex || isGrid) && aligncontent,
          [style[`align-self_${alignself}`]]: (isFlex || isGrid) && alignself,
          [style[`flex-wrap_${flexwrap}`]]: isFlex && flexwrap,
          [style[`flex-grow_${flexgrow}`]]: isFlex && flexgrow,
          [style[`gap_${gap}`]]: (isFlex || isGrid) && gap,
          [style[`overflow_${overflow}`]]: overflow,
          [style.fullWidth]: fullWidth,
          [style.fullHeight]: fullHeight,
        },
        className,
      )}
    >
      {children}
    </div>
  );
};

export default Container;
