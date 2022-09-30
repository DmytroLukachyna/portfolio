import React from 'react';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import style from './Language.module.scss';

export interface LanguageProps {
  className?: string;
}

const Language: React.FC<LanguageProps> = ({ className }) => {
  const {
    i18n: { language, changeLanguage },
  } = useTranslation(['portfolio']);
  const clickHandler = () => {
    switch (language) {
      case 'en-US':
        changeLanguage('ru-RU');
        break;
      case 'ru-RU':
        changeLanguage('hu-HU');
        break;
      case 'hu-HU':
        changeLanguage('uk-UA');
        break;
      case 'uk-UA':
        changeLanguage('en-US');
        break;
      default:
        changeLanguage('en-US');
        break;
    }
  };
  return (
    <button className={classNames(style.button, className)} onClick={clickHandler}>
      {language}
    </button>
  );
};

export default Language;
