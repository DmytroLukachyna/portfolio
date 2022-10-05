import React from 'react';
import i18n from 'i18n';
import { ReactComponent as GenesisLogoIcon } from 'assets/svg/companyLogo/genesis.svg';
import { ReactComponent as KawaleeLogoIcon } from 'assets/svg/companyLogo/kawalee.svg';
import { ReactComponent as AltumLogoIcon } from 'assets/svg/companyLogo/altum.svg';
import { ReactComponent as KLSLogoIcon } from 'assets/svg/companyLogo/kls.svg';

const tr = (line: string) => i18n.t(line, { ns: 'experience' });

export const careerPath = [
  {
    id: 'genesis',
    position: tr('positionJFD'),
    company: 'Genesis',
    companyLogo: <GenesisLogoIcon />,
    location: tr('locationKyiv'),
    workingPeriod: tr('genesisWorkingPeriod'),
    description: [tr('genesis-1'), tr('genesis-2'), tr('genesis-3'), tr('genesis-4')],
  },
  {
    id: 'kawalee',
    position: tr('positionWD'),
    company: 'Kawalee',
    companyLogo: <KawaleeLogoIcon />,
    location: tr('locationKyiv'),
    workingPeriod: tr('kawaleeWorkingPeriod'),
    description: [
      tr('kawalee-1'),
      tr('kawalee-2'),
      tr('kawalee-3'),
      tr('kawalee-4'),
      tr('kawalee-5'),
    ],
  },
  {
    id: 'altum',
    position: tr('positionWD'),
    company: 'Tkachuk.PRO / Altum Agency',
    companyLogo: <AltumLogoIcon />,
    location: tr('locationKyiv'),
    workingPeriod: tr('altumWorkingPeriod'),
    description: [tr('altum-1'), tr('altum-2')],
  },
  {
    id: 'kls',
    position: tr('positionTranslator'),
    company: 'KLS Translation Agency',
    companyLogo: <KLSLogoIcon />,
    location: tr('locationKyiv'),
    workingPeriod: tr('klsWorkingPeriod'),
    description: [tr('kls-1'), tr('kls-2'), tr('kls-3')],
  },
];
