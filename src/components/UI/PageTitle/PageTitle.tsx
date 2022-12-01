import React from 'react';
import classNames from 'classnames';
import { Text } from 'components/UI/Text';
import { ExternalClassNameType } from 'types';
import style from './PageTitle.module.scss';

interface PageTitleProps extends ExternalClassNameType {
  title: string;
}

const PageTitle: React.FC<PageTitleProps> = ({ title, className }) => (
  <div className={classNames(style.wrapper, className)}>
    <Text className={style.title} tag="h2" font="700">
      {title}
    </Text>
  </div>
);

export default PageTitle;
