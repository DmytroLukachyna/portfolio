import React, { useContext } from 'react';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { NavigationContext } from 'components/Navigation/NavigationProvider';
import { ExternalLink } from 'components/UI/ExternalLink';
import { Icon } from 'components/UI/Icon';
import { ReactComponent as DjinniIcon } from 'assets/svg/social/djinni.svg';
import { ReactComponent as TelegramIcon } from 'assets/svg/social/telegram.svg';
import { ReactComponent as GithubIcon } from 'assets/svg/social/github.svg';
import { ReactComponent as LinkedInIcon } from 'assets/svg/social/linkedin.svg';
import { DJINNI_LINK, GITHUB_LINK, LINKEDIN_LINK, TELEGRAM_LINK } from 'constants/links';
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
  const socialLinks = [
    {
      id: 'djinni',
      link: `${DJINNI_LINK}`,
      icon: <DjinniIcon />,
    },
    {
      id: 'github',
      link: `${GITHUB_LINK}`,
      icon: <GithubIcon />,
    },
    {
      id: 'linkedin',
      link: `${LINKEDIN_LINK}`,
      icon: <LinkedInIcon />,
    },
    {
      id: 'telegram',
      link: `${TELEGRAM_LINK}`,
      icon: <TelegramIcon />,
    },
  ];
  return (
    <nav className={classNames(style.wrapper, { [style.active]: active })}>
      <menu className={style.list}>
        {links.map(({ to, label }) => (
          <li key={label} className={style.item}>
            <NavLink
              className={({ isActive }) => classNames(style.link, { [style.active]: isActive })}
              to={to}
              onClick={setActive}
              end
            >
              {label}
            </NavLink>
          </li>
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
