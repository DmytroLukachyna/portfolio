import React from 'react';
import classNames from 'classnames';
import style from './Overlay.module.scss';

interface OverlayProps {
  active: boolean;
  onClick?(): void;
}

const Overlay: React.FC<OverlayProps> = ({ active, onClick }) => (
  <div
    className={classNames(style.overlay, { [style.active]: active })}
    role="presentation"
    onClick={onClick}
  />
);

export default Overlay;
