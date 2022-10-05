import React from 'react';
import classNames from 'classnames';
import style from './Certificates.module.scss';
import { CertificateCard } from '../CertificateCard';
import { certificatesList } from 'data/certificatesList';

export interface CertificatesProps {
  className?: string;
}

const Certificates: React.FC<CertificatesProps> = ({ className }) => (
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
