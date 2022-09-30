import React from 'react';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import { PageTitle } from 'components/UI/PageTitle';
import AboutDescription from './components/AboutDescription';
import AboutPhoto from './components/AboutPhoto';
import AboutInformation from './components/AboutInformation';
import style from './About.module.scss';

const About: React.FC = () => {
  const { t } = useTranslation(['about']);
  return (
    <main className={style.wrapper}>
      <PageTitle title={t('title')} />
      <div className={style.grid}>
        <div className={style.column}>
          <AboutDescription />
        </div>
        <div className={classNames(style.column, style.photo)}>
          <AboutPhoto />
        </div>
        <div className={style.column}>
          <AboutInformation />
        </div>
      </div>
    </main>
  );
};

export default About;
