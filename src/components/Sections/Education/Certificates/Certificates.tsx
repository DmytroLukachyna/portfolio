import React from 'react';
import classNames from 'classnames';
import { CertificateCard } from 'components/Sections/Education/CertificateCard';
import { certificatesList } from 'data/certificatesList';
import { ExternalClassNameType } from 'types';
import style from './Certificates.module.scss';

const Certificates: React.FC<ExternalClassNameType> = ({ className }) => (
  <div className={classNames(style.wrapper, className)}>
    {certificatesList.map(({ title, authority, image, link }) => (
      <CertificateCard
        key={title.replace(' ', '').toLowerCase()}
        title={title}
        authority={authority}
        image={image}
        link={link}
      />
    ))}
  </div>
);

export default Certificates;
