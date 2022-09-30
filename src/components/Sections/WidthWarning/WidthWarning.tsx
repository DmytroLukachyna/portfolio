import React from 'react';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import { Text } from 'components/UI/Text';
import style from './WidthWarning.module.scss';

export interface WidthWarningProps {
  className?: string;
}

const WidthWarning: React.FC<WidthWarningProps> = ({ className }) => {
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
