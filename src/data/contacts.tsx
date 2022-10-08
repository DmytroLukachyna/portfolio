import React from 'react';
import { ReactComponent as DjinniIcon } from 'assets/svg/social/djinni.svg';
import { ReactComponent as TelegramIcon } from 'assets/svg/social/telegram.svg';
import { ReactComponent as GithubIcon } from 'assets/svg/social/github.svg';
import { ReactComponent as LinkedInIcon } from 'assets/svg/social/linkedin.svg';
import { ReactComponent as EnvelopeIcon } from 'assets/svg/social/envelope.svg';
import { ReactComponent as PhoneIcon } from 'assets/svg/social/phone.svg';
import {
  DJINNI_LINK,
  EMAIL_LINK,
  GITHUB_LINK,
  LINKEDIN_LINK,
  PHONE_LINK,
  TELEGRAM_LINK,
} from 'constants/links';

export const socialLinks = [
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

export const contacts = [
  ...socialLinks,
  {
    id: 'email',
    link: EMAIL_LINK,
    icon: <EnvelopeIcon />,
  },
  {
    id: 'phone',
    link: PHONE_LINK,
    icon: <PhoneIcon />,
  },
];
