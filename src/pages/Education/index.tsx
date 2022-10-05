import React from 'react';
import { useTranslation } from 'react-i18next';
import { PageTitle } from 'components/UI/PageTitle';
import { Certificates } from 'components/Sections/Education/Certificates';
import { EducationCard } from 'components/Sections/Education/EducationCard';
import { Text } from 'components/UI/Text';
import style from './Education.module.scss';

const Education: React.FC = () => {
  const { t } = useTranslation(['education']);
  return (
    <main className={style.wrapper}>
      <div className={style.grid}>
        <PageTitle title={t('title-certificates')} />
        <div className={style.text}>
          <Text className={style.subtitle} textalign="center">
            {t('certificates-descr-1')}
          </Text>
          <Text className={style.note} font="400-italic" textalign="center">
            {t('certificates-descr-2')}
          </Text>
        </div>
        <Certificates />
        <PageTitle title={t('title-education')} />
        <EducationCard />
      </div>
    </main>
  );
};

export default Education;
