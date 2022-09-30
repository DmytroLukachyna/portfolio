import React, { createContext, ReactNode, useState } from 'react';
import classNames from 'classnames';
import style from './Theme.module.scss';

type ThemeType = 'light' | 'dark';

interface ThemeContextProps {
  theme: ThemeType;
  setTheme(value: ThemeType): void;
}

export const ThemeContext = createContext({} as ThemeContextProps);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const initialTheme = (localStorage.getItem('theme') as ThemeType) ?? 'dark';
  if (!localStorage.getItem('theme')) localStorage.setItem('theme', initialTheme);
  const [themeValue, setThemeValue] = useState<ThemeType>(initialTheme);
  const setThemeHandler = (value: ThemeType) => {
    setThemeValue(value);
    localStorage.setItem('theme', value);
  };
  return (
    <div className={classNames(style.wrapper, style[`theme_${themeValue}`])}>
      <ThemeContext.Provider
        value={{
          theme: themeValue,
          setTheme: setThemeHandler,
        }}
      >
        {children}
      </ThemeContext.Provider>
    </div>
  );
};
