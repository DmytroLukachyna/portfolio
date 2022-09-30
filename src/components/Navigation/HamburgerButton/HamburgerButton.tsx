import React, { useContext } from 'react';
import classNames from 'classnames';
import { NavigationContext } from 'components/Navigation/NavigationProvider';
import style from './HamburgerButton.module.scss';

const HamburgerButton: React.FC = () => {
  const { active, setActive } = useContext(NavigationContext);

  return (
    <button
      className={classNames(style.button, {
        [style.active]: active,
      })}
      onClick={setActive}
    >
      {Array.from(Array(3)).map((_, index) => (
        <span key={index} className={style.line} />
      ))}
    </button>
  );
};

export default HamburgerButton;
