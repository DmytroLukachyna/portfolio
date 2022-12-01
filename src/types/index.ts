export type LanguagesType = 'en-US' | 'uk-UA' | 'ru-RU' | 'hu-HU';
export type PortfolioCardsType = 'commercial' | 'pet' | 'test';
export type PortfolioButtonType = PortfolioCardsType | 'all';

export interface ExternalClassNameType {
  className?: string;
}

export interface PortfolioButtons {
  type: PortfolioButtonType;
  label: string;
}

export interface StackItemType {
  icon: string;
  name: string;
}
