import React, { ButtonHTMLAttributes, ReactElement } from 'react';
import classNames from 'classnames';
import { FontType } from 'types/textTypes';
import style from './Button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string | ReactElement;
  borderWidth?: 1 | 2;
  font?: FontType;
  active?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  label,
  borderWidth = 2,
  font = '700',
  active,
  className,
  onClick,
}) => (
  <button
    className={classNames(
      style.button,
      style[`font_${font}`],
      style[`border_${borderWidth}`],
      {
        [style.active]: active,
      },
      className,
    )}
    onClick={onClick}
  >
    {label}
  </button>
);

export default Button;
