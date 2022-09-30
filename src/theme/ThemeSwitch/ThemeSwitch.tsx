import React, { useContext } from 'react';
import classNames from 'classnames';
import { ReactComponent as DarkThemeIcon } from 'assets/svg/theme/dark.svg';
import { ReactComponent as LightThemeIcon } from 'assets/svg/theme/light.svg';
import { ThemeContext } from 'theme/Theme';
import style from './ThemeSwitch.module.scss';

const ThemeSwitch: React.FC = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const changeTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  return (
    <span role="presentation" className={style.button} onClick={changeTheme}>
      <span className={classNames(style.toggle, style[`theme_${theme}`])}>
        <DarkThemeIcon className={classNames(style.icon, { [style.active]: theme === 'dark' })} />
        <LightThemeIcon className={classNames(style.icon, { [style.active]: theme === 'light' })} />
      </span>
    </span>
  );
};

export default ThemeSwitch;
