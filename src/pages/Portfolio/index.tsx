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
import style from './Portfolio.module.scss';

const Portfolio: React.FC = () => {
  const [selectedType, setSelectedType] = useState<PortfolioCardProps[`type`] | 'all'>('all');
  const [filteredCardList, setFilteredCardList] = useState<PortfolioCardType[]>(portfolioCardList);
  const handleCardListFilter = (cardType: PortfolioCardProps[`type`]) => {
    setFilteredCardList(portfolioCardList.filter(({ type }) => type.includes(cardType)));
  };
  const { t } = useTranslation(['portfolio']);
  const handleGetDescription = (id: string) => t(id, { ns: 'portfolioCardDescription' });
  return (
    <main className={style.wrapper}>
      <PageTitle title={t('title')} />
      <div className={style.buttons}>
        <Button
          label={t('buttonAll')}
          className={style.button}
          active={selectedType === 'all'}
          onClick={() => {
            setFilteredCardList(portfolioCardList);
            setSelectedType('all');
          }}
        />
        <Button
          label={t('buttonCommercial')}
          className={style.button}
          active={selectedType === 'commercial'}
          onClick={() => {
            handleCardListFilter('commercial');
            setSelectedType('commercial');
          }}
        />
        <Button
          label={t('buttonTestTasks')}
          className={style.button}
          active={selectedType === 'test'}
          onClick={() => {
            handleCardListFilter('test');
            setSelectedType('test');
          }}
        />
        <Button
          label={t('buttonPetProjects')}
          className={style.button}
          active={selectedType === 'pet'}
          onClick={() => {
            handleCardListFilter('pet');
            setSelectedType('pet');
          }}
        />
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
