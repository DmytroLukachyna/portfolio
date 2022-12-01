import HTMLIcon from 'assets/svg/stack/html.svg';
import CSSIcon from 'assets/svg/stack/css.svg';
import SASSIcon from 'assets/svg/stack/sass.svg';
import BEMIcon from 'assets/svg/stack/bem.svg';
// import BootstrapIcon from 'assets/svg/stack/bootstrap.svg';
// import WordpressIcon from 'assets/svg/stack/wordpress.svg';
import JQueryIcon from 'assets/svg/stack/jquery.svg';
import JavaScriptIcon from 'assets/svg/stack/javascript.svg';
import TypeScriptIcon from 'assets/svg/stack/typescript.svg';
import ReactIcon from 'assets/svg/stack/react.svg';
// import ReduxIcon from 'assets/svg/stack/redux.svg';
// import RouterIcon from 'assets/svg/stack/router.svg';
// import StorybookIcon from 'assets/svg/stack/storybook.svg';
import GitIcon from 'assets/svg/stack/git.svg';
import GitHubIcon from 'assets/svg/stack/github.svg';
// import BitBucketIcon from 'assets/svg/stack/bitbucket.svg';
// import YarnIcon from 'assets/svg/stack/yarn.svg';
import WebpackIcon from 'assets/svg/stack/webpack.svg';
// import JiraIcon from 'assets/svg/stack/jira.svg';
// import ConfluenceIcon from 'assets/svg/stack/confluence.svg';
// import TrelloIcon from 'assets/svg/stack/trello.svg';
import FigmaIcon from 'assets/svg/stack/figma.svg';
import YarnIcon from 'assets/svg/stack/yarn.svg';
import GulpIcon from 'assets/svg/stack/gulp.svg';
import CreateReactAppIcon from 'assets/svg/stack/createreactapp.svg';

export type ItemType =
  | 'html5'
  | 'css3'
  | 'scss'
  | 'bem'
  | 'jquery'
  | 'javascript'
  | 'typescript'
  | 'react'
  | 'figma'
  | 'git'
  | 'github'
  | 'createreactapp'
  | 'yarn'
  | 'webpack'
  | 'gulp';

interface ItemContent {
  title:
    | 'HTML5'
    | 'CSS3'
    | 'SASS | SCSS'
    | 'BEM'
    | 'jQuery'
    | 'JavaScript'
    | 'TypeScript'
    | 'React'
    | 'Figma'
    | 'Git'
    | 'GitHub'
    | 'Create React App'
    | 'Yarn'
    | 'Webpack'
    | 'Gulp';
  icon: string;
}

export const cardStackItemListType: Record<ItemType, ItemContent> = {
  html5: {
    title: 'HTML5',
    icon: HTMLIcon,
  },
  css3: {
    title: 'CSS3',
    icon: CSSIcon,
  },
  scss: {
    title: 'SASS | SCSS',
    icon: SASSIcon,
  },
  bem: {
    title: 'BEM',
    icon: BEMIcon,
  },
  jquery: {
    title: 'jQuery',
    icon: JQueryIcon,
  },
  javascript: {
    title: 'JavaScript',
    icon: JavaScriptIcon,
  },
  typescript: {
    title: 'TypeScript',
    icon: TypeScriptIcon,
  },
  react: {
    title: 'React',
    icon: ReactIcon,
  },
  figma: {
    title: 'Figma',
    icon: FigmaIcon,
  },
  git: {
    title: 'Git',
    icon: GitIcon,
  },
  github: {
    title: 'GitHub',
    icon: GitHubIcon,
  },
  createreactapp: {
    title: 'Create React App',
    icon: CreateReactAppIcon,
  },
  yarn: {
    title: 'Yarn',
    icon: YarnIcon,
  },
  webpack: {
    title: 'Webpack',
    icon: WebpackIcon,
  },
  gulp: {
    title: 'Gulp',
    icon: GulpIcon,
  },
};
