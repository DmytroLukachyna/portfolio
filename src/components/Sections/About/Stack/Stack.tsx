import React from 'react';
import classNames from 'classnames';
import { ExternalClassNameType, StackItemType } from 'types';
import style from './Stack.module.scss';

export const StackItem: React.FC<StackItemType> = ({ icon, name }) => (
  <img src={icon} title={name} className={style.item} alt={name} />
);

interface StackContainerProps extends ExternalClassNameType {
  stackList: StackItemType[][];
}

export const StackContainer: React.FC<StackContainerProps> = ({ stackList, className }) => (
  <div className={classNames(style.wrapper, className)}>
    {stackList.map((row, index) => (
      <div key={index} className={style.container}>
        {row.map(({ icon, name }, indexItem) => (
          <StackItem key={indexItem} icon={icon} name={name} />
        ))}
      </div>
    ))}
  </div>
);
