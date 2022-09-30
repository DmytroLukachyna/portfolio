import React from 'react';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import { Text } from 'components/UI/Text';
import { ExternalLink } from 'components/UI/ExternalLink';
import { Icon } from 'components/UI/Icon';
import { ReactComponent as DjinniIcon } from 'assets/svg/social/djinni.svg';
import { ReactComponent as TelegramIcon } from 'assets/svg/social/telegram.svg';
import { ReactComponent as GithubIcon } from 'assets/svg/social/github.svg';
import { ReactComponent as LinkedInIcon } from 'assets/svg/social/linkedin.svg';
import { ReactComponent as EnvelopeIcon } from 'assets/svg/social/envelope.svg';
import { ReactComponent as PhoneIcon } from 'assets/svg/social/phone.svg';
import style from './Social.module.scss';
import {
  DJINNI_LINK,
  EMAIL,
  GITHUB_LINK,
  LINKEDIN_LINK,
  PHONE,
  TELEGRAM_LINK,
} from 'constants/links';

export interface SocialProps {
  className?: string;
}

const links = [
  {
    id: 'djinni',
    link: `${DJINNI_LINK}`,
    icon: <DjinniIcon />,
  },
  {
    id: 'telegram',
    link: `${TELEGRAM_LINK}`,
    icon: <TelegramIcon />,
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
    id: 'email',
    link: `mailto:${EMAIL}`,
    icon: <EnvelopeIcon />,
  },
  {
    id: 'phone',
    link: `tel:${PHONE}`,
    icon: <PhoneIcon />,
  },
];

const Social: React.FC<SocialProps> = ({ className }) => {
  const { t } = useTranslation(['general']);
  return (
    <aside className={classNames(style.wrapper, className)}>
      <Text className={style.text} font="700">
        {t('socials')}
      </Text>
      <span className={style.line} />
      {links.map(({ id, link, icon }) => (
        <ExternalLink className={style.link} key={id} href={link}>
          <Icon className={style.icon} icon={icon} path="currentColor" />
        </ExternalLink>
      ))}
    </aside>
  );
};

export default Social;
