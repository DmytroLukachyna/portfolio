import React from 'react';
import classNames from 'classnames';
import style from './CertificateCard.module.scss';
import { ExternalLink } from 'components/UI/ExternalLink';
import { Text } from 'components/UI/Text';
import { ExternalClassNameType } from 'types';

interface CertificateCardProps extends ExternalClassNameType {
  title: string;
  authority: string;
  image: string;
  link: string;
}

const CertificateCard: React.FC<CertificateCardProps> = ({
  title,
  authority,
  image,
  link,
  className,
}) => (
  <ExternalLink className={classNames(style.card, className)} href={link}>
    <div className={style.overlay}>
      <Text font="700" textalign="center" className={style.title}>
        {title}
      </Text>
      <Text font="700-italic" textalign="center" className={style.authority}>
        {authority}
      </Text>
    </div>
    <img className={style.image} src={image} alt={title} />
  </ExternalLink>
);

export default CertificateCard;
