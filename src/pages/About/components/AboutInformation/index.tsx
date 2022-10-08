import React from 'react';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import { Text } from 'components/UI/Text';
import { Container } from 'components/Helpers/Container';
import { ExternalLink } from 'components/UI/ExternalLink';
import { Resume } from 'components/Sections/About/Resume';
import { Icon } from 'components/UI/Icon';
import { ReactComponent as UASquareFlagIcon } from 'assets/svg/flags/square/ua.svg';
import { ReactComponent as HUSquareFlagIcon } from 'assets/svg/flags/square/hu.svg';
import { ReactComponent as EUSquareFlagIcon } from 'assets/svg/flags/square/eu.svg';
import { socialLinks } from 'data/contacts';
import { EMAIL, EMAIL_LINK, PHONE, PHONE_LINK, PHONE_UA_PATTERN } from 'constants/links';
import style from './AboutInformation.module.scss';
import formatStringByPattern from 'utils/formatStringByPattern';

const AboutInformation: React.FC = () => {
  const { t } = useTranslation(['about']);
  return (
    <>
      <Text className={style.subtitle} font="700" textalign="center">
        {t('subtitleInfotmation')}
      </Text>
      <Text className={style.text}>{t('textInformationNumber')}</Text>
      <Container>
        <ExternalLink font="700" className={style.link} href={PHONE_LINK} target="self">
          {formatStringByPattern(PHONE_UA_PATTERN, PHONE)}
        </ExternalLink>
      </Container>
      <Text className={style.text}>E-mail:</Text>
      <Container>
        <ExternalLink font="700" className={classNames(style.link, style.email)} href={EMAIL_LINK}>
          {EMAIL}
        </ExternalLink>
      </Container>
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
