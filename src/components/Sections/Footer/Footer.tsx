import React from 'react';
import classNames from 'classnames';
import { Text } from 'components/UI/Text';
import style from './Footer.module.scss';

export interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className }) => (
  <footer className={classNames(style.footer, className)}>
    <div className={style.container}>
      <Text className={style.text} textalign="center">
        Made with ❤️ in&nbsp;
        <span className={style.ukraine}>Kyiv, Ukraine</span>
        &nbsp;by Dmytro Lukachyna | 2020-
        {new Date().getFullYear()} © All rights reserved
      </Text>
    </div>
  </footer>
);

export default Footer;
