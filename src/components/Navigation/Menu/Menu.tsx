import React, { useContext } from 'react';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import { NavigationContext } from 'components/Navigation/NavigationProvider';
import { ExternalLink } from 'components/UI/ExternalLink';
import { MenuLink } from './MenuLink';
import { Icon } from 'components/UI/Icon';
import { LanguageButton } from 'components/Services/Language/Language';
import { socialLinks } from 'data/contacts';
import style from './Menu.module.scss';

const Menu: React.FC = () => {
  const { active, setActive } = useContext(NavigationContext);
  const { t } = useTranslation(['menu']);
  const links = [
    { to: '/', label: `${t('home')}` },
    { to: '/about', label: `${t('about')}` },
    { to: '/portfolio', label: `${t('portfolio')}` },
    { to: '/education', label: `${t('education')}` },
    { to: '/experience', label: `${t('experience')}` },
  ];

  return (
    <nav className={classNames(style.wrapper, { [style.active]: active })}>
      <div className={style.languages}>
        <LanguageButton language="en-US" />
        <LanguageButton language="uk-UA" />
      </div>
      <menu className={style.list}>
        {links.map(({ to, label }) => (
          <MenuLink
            key={label.replace(' ', '').toLowerCase()}
            to={to}
            label={label}
            onClick={setActive}
          />
          // <li key={label} className={style.item}>
          //   <NavLink
          //     className={({ isActive }) => classNames(style.link, { [style.active]: isActive })}
          //     to={to}
          //     onClick={setActive}
          //     end
          //   >
          //     {label}
          //   </NavLink>
          // </li>
        ))}
      </menu>
      <div className={style.socials}>
        {socialLinks.map(({ id, link, icon }) => (
          <ExternalLink className={style.item} key={id} href={link}>
            <Icon className={style.icon} icon={icon} path="currentColor" />
          </ExternalLink>
        ))}
      </div>
    </nav>
  );
};

export default Menu;
