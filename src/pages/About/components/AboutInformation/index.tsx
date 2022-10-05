import React from 'react';
import classNames from 'classnames';
import { Text } from 'components/UI/Text';
import { Container } from 'components/Helpers/Container';
import { ExternalLink } from 'components/UI/ExternalLink';
import { Icon } from 'components/UI/Icon';

import { ReactComponent as UASquareFlagIcon } from 'assets/svg/flags/square/ua.svg';
import { ReactComponent as HUSquareFlagIcon } from 'assets/svg/flags/square/hu.svg';
import { ReactComponent as EUSquareFlagIcon } from 'assets/svg/flags/square/eu.svg';
import { Resume } from 'components/Sections/About/Resume';
import { useTranslation } from 'react-i18next';
import { socialLinks } from 'data/contacts';
import style from './AboutInformation.module.scss';

const AboutInformation: React.FC = () => {
  const { t } = useTranslation(['about']);
  return (
    <>
      <Text className={style.subtitle} font="700" textalign="center">
        {t('subtitleInfotmation')}
      </Text>
      <Text className={style.text}>{t('textInformationNumber')}</Text>
      <ExternalLink font="700" className={style.link} href="tel:+380638078737" target="self">
        +380 63 807 87 37
      </ExternalLink>
      <Text className={style.text}>E-mail:</Text>
      <ExternalLink
        font="700"
        className={classNames(style.link, style.email)}
        href="mailto:dmytrolukachyna@gmail.com"
      >
        dmytrolukachyna@gmail.com
      </ExternalLink>
      <Text className={style.text}>{t('textInformationSocialLinks')}</Text>
      <Container gap={12}>
        {socialLinks.map(({ id, link, icon }) => (
          <ExternalLink key={id} href={link}>
            <Icon className={style.icon} icon={icon} path="currentColor" />
          </ExternalLink>
        ))}
      </Container>
      <Container flexdirection="column" gap={8}>
        <Text className={style.text}>{t('textInformationCitizenships')}</Text>
        <Container alignitems="center" gap={8}>
          <Text className={style.text}>• {t('textInformationCitizenshipUA')}</Text>
          <Icon className={style.citizenFlag} icon={<UASquareFlagIcon />} />
        </Container>
        <Container alignitems="center" gap={8}>
          <Text className={style.text}>• {t('textInformationCitizenshipHU')}</Text>
          <Icon className={style.citizenFlag} icon={<HUSquareFlagIcon />} />
          <Icon className={style.citizenFlag} icon={<EUSquareFlagIcon />} />
        </Container>
      </Container>
      <Container flexdirection="column" gap={4}>
        <Text className={style.text}>{t('textInformationLanguages')}</Text>
        <Text className={style.text}>• {t('textInformationLanguageUA')}</Text>
        <Text className={style.text}>• {t('textInformationLanguageEN')}</Text>
        <Text className={style.text}>• {t('textInformationLanguageRU')}</Text>
        <Text className={style.text}>• {t('textInformationLanguageHU')}</Text>
      </Container>
      <Text className={style.text}>{t('textInformationCV')}</Text>
      <Resume />
    </>
  );
};

export default AboutInformation;
