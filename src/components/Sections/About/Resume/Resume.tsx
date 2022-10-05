import React, { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import { ExternalLink } from 'components/UI/ExternalLink';
import { Container } from 'components/Helpers/Container';
import { Text } from 'components/UI/Text';
import { Button } from 'components/UI/Button';
import { Icon } from 'components/UI/Icon';
import { ReactComponent as UARoundedFlagIcon } from 'assets/svg/flags/rounded/ua.svg';
import { ReactComponent as ENRoundedFlagIcon } from 'assets/svg/flags/rounded/gb.svg';
// import { ReactComponent as HURoundedFlagIcon } from 'assets/svg/flags/rounded/hu.svg';
// import { ReactComponent as RURoundedFlagIcon } from 'assets/svg/flags/rounded/ru.svg';
import style from './Resume.module.scss';

export interface ResumeButtonProps {
  icon: ReactElement;
  label: string;
  link: string;
}

export const ResumeButton: React.FC<ResumeButtonProps> = ({ icon, label, link }) => (
  <ExternalLink className={style.cv} href={link}>
    <Button
      className={style.btn}
      borderWidth={1}
      font="400"
      label={
        <Container display="inline-flex" gap={4} alignitems="center">
          <Icon className={style.flag} icon={icon} />
          <Text className={style.text}>{label}</Text>
        </Container>
      }
    />
  </ExternalLink>
);

export const Resume: React.FC = () => {
  const { t } = useTranslation(['about']);
  const buttons = [
    {
      id: 'ua',
      icon: <UARoundedFlagIcon />,
      label: t('textInformationCVUA'),
      link: '/pdf/CV-Dmytro_Lukachyna_(ua).pdf',
    },
    {
      id: 'en',
      icon: <ENRoundedFlagIcon />,
      label: t('textInformationCVEN'),
      link: '/pdf/CV-Dmytro_Lukachyna_(en).pdf',
    },
    // {
    //   id: 'hu',
    //   icon: <HURoundedFlagIcon />,
    //   label: t('textInformationCVHU'),
    //   link: '/pdf/CV-Dmytro_Lukachyna_(hu).pdf',
    // },
    // {
    //   id: 'ru',
    //   icon: <RURoundedFlagIcon />,
    //   label: t('textInformationCVRU'),
    //   link: '/pdf/CV-Dmytro_Lukachyna_(ru).pdf',
    // },
  ];
  return (
    <div className={style.box}>
      {buttons.map(({ id, icon, label, link }) => (
        <ResumeButton key={id} icon={icon} label={label} link={link} />
      ))}
    </div>
  );
};
