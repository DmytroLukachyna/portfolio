import React, { useContext } from 'react';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
import { NavigationContext } from 'components/Navigation/NavigationProvider';
import style from './MenuLink.module.scss';

interface MenuLinkProps {
  to: string;
  label: string;
  onClick(): void;
}

const MenuLink: React.FC<MenuLinkProps> = ({ to, label, onClick }) => {
  const { active: menuActive } = useContext(NavigationContext);
  return (
    <NavLink
      className={({ isActive: linkActive }) =>
        classNames(style.link, {
          [style.selected]: linkActive,
          [style.active]: menuActive,
        })
      }
      to={to}
      onClick={onClick}
      end
    >
      {label}
    </NavLink>
  );
};

export default MenuLink;
