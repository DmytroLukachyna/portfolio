import React from 'react';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import UAFlagIcon from 'assets/svg/flags/rounded/ua.svg';
import ENFlagIcon from 'assets/svg/flags/rounded/gb.svg';
import RUFlagIcon from 'assets/svg/flags/rounded/ru.svg';
import HUFlagIcon from 'assets/svg/flags/rounded/hu.svg';
import { LanguagesType } from 'types';
import style from './Language.module.scss';

interface LanguageButtonProps {
  language: LanguagesType;
}

const flagList: Record<LanguagesType, { icon: string; alt: string }> = {
  'uk-UA': {
    icon: UAFlagIcon,
    alt: 'Українською',
  },
  'en-US': {
    icon: ENFlagIcon,
    alt: 'In English',
  },
  'ru-RU': {
    icon: RUFlagIcon,
    alt: 'На русском',
  },
  'hu-HU': {
    icon: HUFlagIcon,
    alt: 'Magyarul',
  },
};

export const LanguageButton: React.FC<LanguageButtonProps> = ({ language }) => {
  const {
    i18n: { language: currentLanguage, changeLanguage },
  } = useTranslation();
  const activeLanguage = currentLanguage === language;
  const { icon, alt } = flagList[language];
  return (
    <button
      onClick={() => changeLanguage(language)}
      className={classNames(style.button, {
        [style.active]: activeLanguage,
      })}
    >
      <img src={icon} alt={alt} />
    </button>
  );
};

export const Language: React.FC = () => (
  <div className={style.wrapper}>
    <LanguageButton language="en-US" />
    <LanguageButton language="uk-UA" />
    {/* <LanguageButton language="ru-RU" /> */}
    {/* <LanguageButton language="hu-HU" /> */}
  </div>
);

export default Language;
