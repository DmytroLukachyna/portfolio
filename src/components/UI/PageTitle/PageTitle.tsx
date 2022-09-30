import React from 'react';
import classNames from 'classnames';
import { Text } from 'components/UI/Text';
import style from './PageTitle.module.scss';

export interface PageTitleProps {
  title: string;
  className?: string;
}

const PageTitle: React.FC<PageTitleProps> = ({ title, className }) => (
  <div className={classNames(style.wrapper, className)}>
    <Text className={style.title} tag="h2" font="700">
      {title}
    </Text>
  </div>
);

export default PageTitle;
