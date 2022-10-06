import React, { useContext } from 'react';
import classNames from 'classnames';
import { ThemeContext } from 'theme/Theme';
import { NavigationContext } from 'components/Navigation/NavigationProvider';
import { ReactComponent as LightThemeIcon } from 'assets/svg/theme/light.svg';
import { ReactComponent as DarkThemeIcon } from 'assets/svg/theme/dark.svg';
import style from './ThemeSwitch.module.scss';

const ThemeSwitch: React.FC = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const { show } = useContext(NavigationContext);
  const changeTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  return (
    <span
      role="presentation"
      className={classNames(style.button, {
        [style.hidden]: !show,
      })}
      onClick={changeTheme}
    >
      <span className={classNames(style.toggle, style[`theme_${theme}`])}>
        <DarkThemeIcon className={classNames(style.icon, { [style.active]: theme === 'dark' })} />
        <LightThemeIcon className={classNames(style.icon, { [style.active]: theme === 'light' })} />
      </span>
    </span>
  );
};

export default ThemeSwitch;
