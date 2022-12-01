import React from 'react';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import { Text } from 'components/UI/Text';
import { ExternalClassNameType } from 'types';
import style from './WidthWarning.module.scss';

const WidthWarning: React.FC<ExternalClassNameType> = ({ className }) => {
  const { t } = useTranslation(['warning']);
  return (
    <div className={classNames(style.wrapper, className)}>
      <div className={style.content}>
        <Text className={style.text}>{t('warning-1')}</Text>
        <Text className={style.text}>{t('warning-2')}</Text>
        <Text className={style.text}>{t('warning-3')}</Text>
      </div>
    </div>
  );
};

export default WidthWarning;
