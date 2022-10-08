import React from 'react';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import { Text } from 'components/UI/Text';
import { ExternalLink } from 'components/UI/ExternalLink';
import { Icon } from 'components/UI/Icon';
import { contacts } from 'data/contacts';
import style from './Social.module.scss';

export interface SocialProps {
  className?: string;
}

const Social: React.FC<SocialProps> = ({ className }) => {
  const { t } = useTranslation(['general']);

  const { pathname } = useLocation();
  if (pathname === '/about') {
    return null;
  }

  return (
    <aside className={classNames(style.wrapper, className)}>
      <Text className={style.text} font="700">
        {t('socials')}
      </Text>
      <span className={style.line} />
      {contacts.map(({ id, link, icon }) => (
        <ExternalLink className={style.link} key={id} href={link}>
          <Icon className={style.icon} icon={icon} path="currentColor" />
        </ExternalLink>
      ))}
    </aside>
  );
};

export default Social;
