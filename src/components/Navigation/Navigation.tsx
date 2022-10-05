import React, { useContext } from 'react';
import { Menu } from 'components/Navigation/Menu';
import { Overlay } from 'components/Helpers/Overlay';
import { NavigationContext } from 'components/Navigation/NavigationProvider';
import { HamburgerButton } from './HamburgerButton';
import { Language } from 'components/Services/Language';

const Navigation: React.FC = () => {
  const { active, setActive } = useContext(NavigationContext);
  return (
    <>
      <Overlay active={active} onClick={setActive} />
      <Menu />
      <HamburgerButton />
      {!active && <Language />}
    </>
  );
};

export default Navigation;
