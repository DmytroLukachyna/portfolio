import React, { ReactNode } from 'react';
import classNames from 'classnames';
import type { Tag, TextAlign, TextTransform } from 'types/textTypes';
import type { Display, Transition } from 'types/layoutTypes';
import style from './Text.module.scss';

export interface TextProps {
  tag?: Tag;
  font?: '400' | '700' | '400-italic' | '700-italic';
  display?: Display;
  textalign?: TextAlign;
  texttransform?: TextTransform;
  transition?: Transition;
  noSelect?: boolean;
  className?: string;
  children: ReactNode;
}

const Text = React.forwardRef<HTMLElement, TextProps>(
  (
    {
      tag = 'span',
      font = '400',
      display,
      textalign,
      texttransform,
      transition,
      noSelect,
      className,
      children,
    },
    ref,
  ) =>
    React.createElement(
      tag,
      {
        ref,
        className: classNames(
          style.text,
          style[`font_${font}`],
          {
            [style[`display_${display}`]]: display,
            [style[`text-align_${textalign}`]]: textalign,
            [style[`text-transform_${texttransform}`]]: texttransform,
            [style[`transition_${transition}`]]: transition,
            [style.noSelect]: noSelect,
          },
          className,
        ),
      },
      children,
    ),
);

Text.displayName = 'Text';

export default Text;
