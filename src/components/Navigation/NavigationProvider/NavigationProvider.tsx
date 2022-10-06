import useEventListener from 'hooks/useEventListener';
import React, { createContext, ReactNode, useCallback, useState } from 'react';

interface NavigationContextProps {
  active: boolean;
  setActive(): void;
  show: boolean;
  setShow(value: boolean): void;
}

const NavigationContext = createContext({} as NavigationContextProps);

interface NavigationProviderProps {
  children: ReactNode;
}

const NavigationProvider: React.FC<NavigationProviderProps> = ({ children }) => {
  const [menuActive, setMenuActive] = useState<boolean>(false);
  const [controlsShown, setControlsShown] = useState<boolean>(true);
  const setThemeHandler = (): void => {
    setMenuActive((prevState) => !prevState);
  };
  const showControlsHandler = (value: boolean) => {
    setControlsShown(value);
  };
  const handlePressEscape = useCallback(
    ({ code }: KeyboardEvent) => {
      if (code === 'Escape' && menuActive) {
        setMenuActive(false);
      }
    },
    [menuActive],
  );
  useEventListener('keydown', handlePressEscape);
  return (
    <NavigationContext.Provider
      value={{
        active: menuActive,
        setActive: setThemeHandler,
        show: controlsShown,
        setShow: showControlsHandler,
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
};

export { NavigationContext, NavigationProvider };
