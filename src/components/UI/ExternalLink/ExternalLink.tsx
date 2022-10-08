import React, { AnchorHTMLAttributes, ReactNode } from 'react';
import classNames from 'classnames';
import style from './ExternalLink.module.scss';

export interface ExternalLinkProps extends AnchorHTMLAttributes<Element> {
  href: string;
  font?: '400' | '700' | '400-italic' | '700-italic';
  target?: 'blank' | 'self';
  children?: string | ReactNode;
}

const ExternalLink: React.FC<ExternalLinkProps> = ({
  href,
  font,
  target = 'blank',
  children,
  className,
}: ExternalLinkProps) => (
  <a
    className={classNames(
      style.link,
      {
        [style[`font_${font}`]]: font,
        [style.text]: typeof children === 'string',
      },
      className,
    )}
    href={href}
    target={`_${target}`}
    rel="noopener noreferrer"
  >
    {children ?? href}
  </a>
);

export default ExternalLink;
