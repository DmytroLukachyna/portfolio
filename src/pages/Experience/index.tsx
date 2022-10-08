import React from 'react';
import { useTranslation } from 'react-i18next';
import { PageTitle } from 'components/UI/PageTitle';
import { WorkplaceCard } from 'components/Sections/Experience/WorkplaceCard';
import { ReactComponent as GenesisLogoIcon } from 'assets/svg/companyLogo/genesis.svg';
import { ReactComponent as KawaleeLogoIcon } from 'assets/svg/companyLogo/kawalee.svg';
import { ReactComponent as AltumLogoIcon } from 'assets/svg/companyLogo/altum.svg';
import { ReactComponent as KLSLogoIcon } from 'assets/svg/companyLogo/kls.svg';
import style from './Experience.module.scss';

const Experience: React.FC = () => {
  const { t } = useTranslation(['experience']);
  const careerPath = [
    {
      id: 'genesis',
      position: t('positionFD'),
      company: 'Genesis',
      companyLogo: <GenesisLogoIcon />,
      location: t('locationKyiv'),
      workingPeriod: t('genesisWorkingPeriod'),
      description: [t('genesis-1'), t('genesis-2'), t('genesis-3'), t('genesis-4')],
    },
    {
      id: 'kawalee',
      position: t('positionWD'),
      company: 'Kawalee',
      companyLogo: <KawaleeLogoIcon />,
      location: t('locationKyiv'),
      workingPeriod: t('kawaleeWorkingPeriod'),
      description: [t('kawalee-1'), t('kawalee-2'), t('kawalee-3'), t('kawalee-4')],
    },
    {
      id: 'altum',
      position: t('positionWD'),
      company: 'Tkachuk.PRO / Altum Agency',
      companyLogo: <AltumLogoIcon />,
      location: t('locationKyiv'),
      workingPeriod: t('altumWorkingPeriod'),
      description: [t('altum-1'), t('altum-2')],
    },
    {
      id: 'kls',
      position: t('positionTranslator'),
      company: 'KLS Translation Agency',
      companyLogo: <KLSLogoIcon />,
      location: t('locationKyiv'),
      workingPeriod: t('klsWorkingPeriod'),
      description: [t('kls-1'), t('kls-2'), t('kls-3')],
    },
  ];
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
