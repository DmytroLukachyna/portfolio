import React from 'react';
import { useTranslation } from 'react-i18next';
import { cardStackItemListType, ItemType } from './PortfolioCardStackItems';
import { Text } from 'components/UI/Text';
import style from './PortfolioCardStack.module.scss';

export interface PortfolioCardStackItemProps {
  name: ItemType;
}

export const PortfolioCardStackItem: React.FC<PortfolioCardStackItemProps> = ({ name }) => (
  <img
    src={cardStackItemListType[name].icon}
    title={cardStackItemListType[name].title}
    className={style.item}
    alt={name}
  />
);

export interface PortfolioCardStackProps {
  stackList: ItemType[];
}

export const PortfolioCardStack: React.FC<PortfolioCardStackProps> = ({ stackList }) => {
  const { t } = useTranslation(['portfolio']);
  return (
    <div className={style.wrapper}>
      <Text className={style.text}>{t('techStack')}</Text>
      <div className={style.container}>
        {stackList.map((name) => (
          <PortfolioCardStackItem key={name} name={name} />
        ))}
      </div>
    </div>
  );
};
