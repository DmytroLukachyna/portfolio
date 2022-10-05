import React from 'react';
import { useTranslation } from 'react-i18next';
import { PageTitle } from 'components/UI/PageTitle';
import { WorkplaceCard } from 'components/Sections/Experience/WorkplaceCard';
import { careerPath } from 'data/careerPath';
import style from './Experience.module.scss';

const Experience: React.FC = () => {
  const { t } = useTranslation(['experience']);
  return (
    <main className={style.wrapper}>
      <PageTitle title={t('title')} />
      <div className={style.grid}>
        {careerPath.map(
          ({ id, position, company, companyLogo, location, workingPeriod, description }) => (
            <WorkplaceCard
              key={id}
              position={position}
              company={company}
              companyLogo={companyLogo}
              location={location}
              workingPeriod={workingPeriod}
              description={description}
            />
          ),
        )}
      </div>
    </main>
  );
};

export default Experience;
