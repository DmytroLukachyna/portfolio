import { StackItemType } from './Stack';
import HTMLIcon from 'assets/svg/stack/html.svg';
import CSSIcon from 'assets/svg/stack/css.svg';
import SASSIcon from 'assets/svg/stack/sass.svg';
import BEMIcon from 'assets/svg/stack/bem.svg';
import BootstrapIcon from 'assets/svg/stack/bootstrap.svg';
import WordpressIcon from 'assets/svg/stack/wordpress.svg';
import JavaScriptIcon from 'assets/svg/stack/javascript.svg';
import TypeScriptIcon from 'assets/svg/stack/typescript.svg';
import ReactIcon from 'assets/svg/stack/react.svg';
import ReduxIcon from 'assets/svg/stack/redux.svg';
import RouterIcon from 'assets/svg/stack/router.svg';
import StorybookIcon from 'assets/svg/stack/storybook.svg';
import GitIcon from 'assets/svg/stack/git.svg';
import GitHubIcon from 'assets/svg/stack/github.svg';
import BitBucketIcon from 'assets/svg/stack/bitbucket.svg';
import YarnIcon from 'assets/svg/stack/yarn.svg';
import GitKrakenIcon from 'assets/svg/stack/gitkraken.svg';
import WebpackIcon from 'assets/svg/stack/webpack.svg';
import JiraIcon from 'assets/svg/stack/jira.svg';
import ConfluenceIcon from 'assets/svg/stack/confluence.svg';
import TrelloIcon from 'assets/svg/stack/trello.svg';
import FigmaIcon from 'assets/svg/stack/figma.svg';
import AvocodeIcon from 'assets/svg/stack/avocode.svg';
import PhotoshopIcon from 'assets/svg/stack/photoshop.svg';

export const stackList: StackItemType[][] = [
  [
    { icon: HTMLIcon, name: 'HTML' },
    { icon: CSSIcon, name: 'CSS' },
    { icon: SASSIcon, name: 'SASS | SCSS' },
    { icon: BEMIcon, name: 'BEM' },
    { icon: BootstrapIcon, name: 'Bootstrap' },
    { icon: WordpressIcon, name: 'Wordpress' },
  ],
  [
    { icon: JavaScriptIcon, name: 'JavaScript' },
    { icon: TypeScriptIcon, name: 'TypeScript' },
    { icon: ReactIcon, name: 'React' },
    { icon: ReduxIcon, name: 'React-Redux' },
    { icon: RouterIcon, name: 'React Router' },
    { icon: StorybookIcon, name: 'Storybook' },
  ],
  [
    { icon: GitIcon, name: 'Git' },
    { icon: GitHubIcon, name: 'GitHub' },
    { icon: BitBucketIcon, name: 'BitBucket' },
    { icon: YarnIcon, name: 'Yarn' },
    { icon: GitKrakenIcon, name: 'GitKraken' },
    { icon: WebpackIcon, name: 'Webpack' },
  ],
  [
    { icon: JiraIcon, name: 'Jira' },
    { icon: ConfluenceIcon, name: 'Confluence' },
    { icon: TrelloIcon, name: 'Trello' },
    { icon: FigmaIcon, name: 'Figma' },
    { icon: AvocodeIcon, name: 'Avocode' },
    { icon: PhotoshopIcon, name: 'Adobe Photoshop' },
  ],
];

export default stackList;
