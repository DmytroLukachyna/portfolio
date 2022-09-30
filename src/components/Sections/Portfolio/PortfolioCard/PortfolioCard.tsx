import React from 'react';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import { ExternalLink } from 'components/UI/ExternalLink';
import { Text } from 'components/UI/Text';
import { Icon } from 'components/UI/Icon';
import { PortfolioCardStack } from './PortfolioCardStack';
import { ReactComponent as GitHubIcon } from 'assets/svg/social/github.svg';
import style from './PortfolioCard.module.scss';
import type { ItemType } from './PortfolioCardStack/PortfolioCardStackItems';

export interface PortfolioCardProps {
  name: string;
  description: string;
  img: string;
  link: string;
  type: 'commercial' | 'pet' | 'test';
  stackList: ItemType[];
  sourceCode: string;
  className?: string;
}

export const PortfolioCard: React.FC<PortfolioCardProps> = ({
  name,
  description,
  img,
  link,
  stackList,
  sourceCode,
  className,
}) => {
  const { t } = useTranslation(['portfolio']);
  return (
    <div className={classNames(style.card, className)}>
      <ExternalLink className={style.preview} href={link}>
        <div className={style.overlay}>
          <Text className={style.text} font="700">
            {t('visitWebsite')}
          </Text>
        </div>
        <img className={style.image} src={img} alt="LEX" />
      </ExternalLink>
      <div className={style.info}>
        <div className={style.row}>
          <div className={style.main}>
            <Text className={style.name} font="700">
              {name}
            </Text>
            <Text className={style.description} font="400-italic">
              {description}
            </Text>
          </div>
          <PortfolioCardStack stackList={stackList} />
        </div>
        <div className={style.row}>
          <Text className={style.adapt} font="400">
            {t('adaptiveness')}
          </Text>
          <ExternalLink className={style.gh} font="400" href={sourceCode}>
            {t('sourceCode')}
            <Icon className={style.ghIcon} icon={<GitHubIcon />} path="currentColor" />
          </ExternalLink>
        </div>
      </div>
    </div>
  );
};

export const PortfolioCardBlank: React.FC = () => {
  const { t } = useTranslation(['portfolio']);
  return (
    <div className={style.card}>
      <div className={style.blank}>
        <Text className={style.note} textalign="center">
          {t('workInProgress')}
        </Text>
      </div>
    </div>
  );
};
