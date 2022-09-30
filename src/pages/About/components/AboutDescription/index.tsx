import React from 'react';
import { useTranslation } from 'react-i18next';
import { Text } from 'components/UI/Text';
import { StackContainer, stackList } from 'components/Sections/About/Stack';
import style from './AboutDescription.module.scss';

const AboutDescription: React.FC = () => {
  const { t } = useTranslation(['about']);
  return (
    <>
      <Text className={style.subtitle} font="700" textalign="center">
        {t('subtitleDescription')}
      </Text>
      <Text className={style.text}>{t('textDescription1')}</Text>
      <Text className={style.text}>{t('textDescription2')}</Text>
      <Text className={style.text}>{t('textDescription3')}</Text>
      <Text className={style.text} textalign="center">
        {t('textDescription4')}
      </Text>
      <StackContainer stackList={stackList} />
    </>
  );
};

export default AboutDescription;
