import React from 'react';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import { Text } from 'components/UI/Text';
import { ExternalClassNameType } from 'types';
import style from './Footer.module.scss';

const Footer: React.FC<ExternalClassNameType> = ({ className }) => {
  const {
    t,
    i18n: { language },
  } = useTranslation(['footer']);
  const showAuthor = language === 'en-US';
  return (
    <footer className={classNames(style.footer, className)}>
      <div className={style.container}>
        <Text className={style.text} textalign="center">
          {t('created')}&nbsp;
          <span className={style.ukraine}>{t('location')}&nbsp;</span>
          {showAuthor && t('author')}| 2020-
          {new Date().getFullYear()}&nbsp;
          {t('legal')}
        </Text>
      </div>
    </footer>
  );
};

export default Footer;
