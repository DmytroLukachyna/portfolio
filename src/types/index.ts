export type LanguagesType = 'en-US' | 'uk-UA' | 'ru-RU' | 'hu-HU';
export type PortfolioCardsType = 'commercial' | 'pet' | 'test';
export type PortfolioButtonsType = PortfolioCardsType | 'all';

export interface PortfolioButtons {
  type: PortfolioButtonsType;
  label: string;
}
