import Lex from 'assets/img/projects/commercial/lex.png';
import Ecobud from 'assets/img/projects/commercial/ecobud.png';
import Fireplace from 'assets/img/projects/commercial/fireplace.png';
import ViDecor from 'assets/img/projects/commercial/videcor.png';
import FreeAccount from 'assets/img/projects/commercial/free-account.png';
import ExpenseTracker from 'assets/img/projects/pet/expense-tracker.png';
import Randomizer from 'assets/img/projects/pet/randomizer.jpg';
import Orange from 'assets/img/projects/pet/orange.png';
import Sparcle from 'assets/img/projects/pet/sparcle.png';
import Ski from 'assets/img/projects/pet/ski.png';
import Languages from 'assets/img/projects/pet/languages.png';
import Casino from 'assets/img/projects/test/casino.png';
import EnergoPro from 'assets/img/projects/test/energo-pro.png';
import Tradenet from 'assets/img/projects/test/tradenet.png';
import Transactions from 'assets/img/projects/test/transactions.png';
import { ItemType } from 'components/Sections/Portfolio/PortfolioCard/PortfolioCardStack/PortfolioCardStackItems';
import { GITHUB_LINK } from 'constants/links';

export interface PortfolioCardType {
  id: string;
  name: string;
  img: string;
  link: string;
  type: 'commercial' | 'pet' | 'test';
  stackList: ItemType[];
  sourceCode: string;
}

const portfolioCardList: PortfolioCardType[] = [
  {
    id: 'lex',
    name: 'Lex',
    img: Lex,
    type: 'commercial',
    link: 'projects/commercial/lex',
    stackList: ['html5', 'css3', 'scss', 'bem', 'jquery', 'figma', 'gulp', 'yarn'],
    sourceCode: `${GITHUB_LINK}/lex`,
  },
  {
    id: 'ecobud',
    name: 'Ecobud',
    img: Ecobud,
    type: 'commercial',
    link: 'projects/commercial/ecobud',
    stackList: ['html5', 'css3', 'scss', 'bem', 'jquery', 'figma', 'gulp', 'yarn'],
    sourceCode: `${GITHUB_LINK}/ecobud`,
  },
  {
    id: 'fireplace',
    name: 'Kamin Sauna Agency',
    img: Fireplace,
    type: 'commercial',
    link: 'projects/commercial/fireplace',
    stackList: ['html5', 'css3', 'scss', 'bem', 'jquery', 'figma', 'gulp', 'yarn'],
    sourceCode: `${GITHUB_LINK}/fireplace`,
  },
  {
    id: 'videcor',
    name: 'ViDecor',
    img: ViDecor,
    type: 'commercial',
    link: 'projects/commercial/videcor',
    stackList: ['html5', 'css3', 'scss', 'bem', 'jquery', 'figma', 'gulp', 'yarn'],
    sourceCode: `${GITHUB_LINK}/videcor`,
  },
  {
    id: 'free-account',
    name: 'Training account',
    img: FreeAccount,
    type: 'commercial',
    link: 'projects/commercial/free-account',
    stackList: ['html5', 'css3', 'scss', 'bem', 'javascript', 'figma', 'gulp', 'yarn'],
    sourceCode: `${GITHUB_LINK}/free-account`,
  },
  {
    id: 'expense-tracker',
    name: 'Expense tracker',
    img: ExpenseTracker,
    type: 'pet',
    link: 'projects/pet/expense-tracker',
    stackList: [
      'react',
      'typescript',
      'javascript',
      'scss',
      'css3',
      'createreactapp',
      'figma',
      'yarn',
    ],
    sourceCode: `${GITHUB_LINK}/react-expense-tracker`,
  },
  {
    id: 'randomizer',
    name: 'Randomizer',
    img: Randomizer,
    type: 'pet',
    link: 'projects/pet/randomizer',
    stackList: [
      'react',
      'typescript',
      'javascript',
      'scss',
      'css3',
      'createreactapp',
      'figma',
      'yarn',
    ],
    sourceCode: `${GITHUB_LINK}/randomizer`,
  },
  {
    id: 'orange',
    name: 'Orange Web Agency',
    img: Orange,
    type: 'pet',
    link: 'projects/pet/orange',
    stackList: ['html5', 'css3', 'scss', 'bem', 'jquery', 'figma', 'gulp', 'yarn'],
    sourceCode: `${GITHUB_LINK}/orange-web-agency`,
  },
  {
    id: 'sparcle',
    name: 'Sparcle Cleaning',
    img: Sparcle,
    type: 'pet',
    link: 'projects/pet/sparcle',
    stackList: ['html5', 'css3', 'scss', 'bem', 'jquery', 'figma', 'gulp', 'yarn'],
    sourceCode: `${GITHUB_LINK}/sparcle-cleaning`,
  },
  {
    id: 'ski',
    name: 'Ski & Snowboard',
    img: Ski,
    type: 'pet',
    link: 'projects/pet/ski',
    stackList: ['html5', 'css3', 'scss', 'bem', 'jquery', 'figma', 'gulp', 'yarn'],
    sourceCode: `${GITHUB_LINK}/ski-and-snowboard-school`,
  },
  {
    id: 'languages',
    name: 'Welcome Screen',
    img: Languages,
    type: 'pet',
    link: 'projects/pet/languages',
    stackList: ['html5', 'css3', 'scss', 'bem', 'jquery', 'figma', 'gulp', 'yarn'],
    sourceCode: `${GITHUB_LINK}/welcome-screen-languages`,
  },
  {
    id: 'transactions',
    name: 'Import transactions',
    img: Transactions,
    type: 'test',
    link: 'projects/test/transactions',
    stackList: ['html5', 'css3', 'scss', 'bem', 'javascript', 'figma', 'webpack', 'yarn'],
    sourceCode: `${GITHUB_LINK}/test_transactions`,
  },
  {
    id: 'energo-pro',
    name: 'Energo Pro',
    img: EnergoPro,
    type: 'test',
    link: 'projects/test/energo-pro',
    stackList: ['html5', 'css3', 'scss', 'bem', 'jquery', 'figma', 'gulp', 'yarn'],
    sourceCode: `${GITHUB_LINK}/test_energo-pro`,
  },
  {
    id: 'tradenet',
    name: 'Tradenet Plus',
    img: Tradenet,
    type: 'test',
    link: 'projects/test/tradenet',
    stackList: ['html5', 'css3', 'scss', 'bem', 'jquery', 'figma', 'gulp', 'yarn'],
    sourceCode: `${GITHUB_LINK}/test_tradenet`,
  },
  {
    id: 'casino',
    name: 'Yukon Gold Casino',
    img: Casino,
    type: 'test',
    link: 'projects/test/casino',
    stackList: ['html5', 'css3', 'scss', 'bem', 'jquery', 'figma', 'gulp', 'yarn'],
    sourceCode: `${GITHUB_LINK}/test-casino`,
  },
];

export default portfolioCardList;
