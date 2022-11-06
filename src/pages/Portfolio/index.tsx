import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { PageTitle } from 'components/UI/PageTitle';
import { Button } from 'components/UI/Button';
import {
  PortfolioCard,
  PortfolioCardBlank,
  PortfolioCardProps,
} from 'components/Sections/Portfolio/PortfolioCard';
import portfolioCardList, { PortfolioCardType } from 'data/portfolioCardsList';
import { PortfolioButtons } from 'types';
import style from './Portfolio.module.scss';

const Portfolio: React.FC = () => {
  const [selectedType, setSelectedType] = useState<PortfolioCardProps[`type`] | 'all'>('all');
  const [filteredCardList, setFilteredCardList] = useState<PortfolioCardType[]>(portfolioCardList);
  const handleCardListFilter = (cardType: PortfolioCardProps[`type`]) => {
    setFilteredCardList(portfolioCardList.filter(({ type }) => type.includes(cardType)));
  };
  const { t } = useTranslation(['portfolio']);
  const handleGetDescription = (id: string) => t(id, { ns: 'portfolioCardDescription' });
  const buttons: PortfolioButtons[] = [
    { type: 'all', label: 'buttonAll' },
    { type: 'commercial', label: 'buttonCommercial' },
    { type: 'test', label: 'buttonTestTasks' },
    { type: 'pet', label: 'buttonPetProjects' },
  ];
  return (
    <main className={style.wrapper}>
      <PageTitle title={t('title')} />
      <div className={style.buttons}>
        {buttons.map(({ type, label }) => (
          <Button
            key={type}
            label={t(label) as string}
            className={style.button}
            active={selectedType === type}
            onClick={() => {
              if (type === 'all') {
                setFilteredCardList(portfolioCardList);
              } else {
                handleCardListFilter(type);
              }
              setSelectedType(type);
            }}
          />
        ))}
      </div>
      <div className={style.grid}>
        {filteredCardList.map(({ id, name, img, link, type, stackList, sourceCode }) => (
          <PortfolioCard
            key={id}
            name={name}
            description={handleGetDescription(id)}
            img={img}
            link={link}
            type={type}
            stackList={stackList}
            sourceCode={sourceCode}
          />
        ))}
        {!(filteredCardList.length % 3 === 0 && filteredCardList.length !== 0) &&
          Array.from(Array(3 - (filteredCardList.length % 3))).map((_, index) => (
            <PortfolioCardBlank key={index} />
          ))}
      </div>
    </main>
  );
};

export default Portfolio;
