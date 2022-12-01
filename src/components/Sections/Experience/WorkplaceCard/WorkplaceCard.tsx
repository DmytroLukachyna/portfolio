import React, { ReactNode } from 'react';
import classNames from 'classnames';
import { Text } from 'components/UI/Text';
import { Icon } from 'components/UI/Icon';
import { ReactComponent as LocationIcon } from 'assets/svg/work/location.svg';
import { ReactComponent as CalendarIcon } from 'assets/svg/work/calendar.svg';
import { ExternalClassNameType } from 'types';
import style from './WorkplaceCard.module.scss';

interface WorkplaceCardProps extends ExternalClassNameType {
  position: string;
  company: string;
  location: string;
  workingPeriod: string;
  companyLogo: ReactNode;
  description: string[];
}

const WorkplaceCard: React.FC<WorkplaceCardProps> = ({
  position,
  company,
  location,
  workingPeriod,
  companyLogo,
  description,
  className,
}) => (
  <div className={classNames(style.card, className)}>
    <div className={style.header}>
      <div className={style.companyLogo}>
        <Icon icon={companyLogo} />
      </div>
      <div className={style.main}>
        <div className={style.title}>
          <Text font="700" className={style.position}>
            {position}
            <Text className={style.company}>, {company}</Text>
          </Text>
        </div>
        <div className={style.location}>
          <Icon className={style.icon} icon={<LocationIcon />} path="currentColor" />
          <Text font="400-italic" className={style.text}>
            {location}
          </Text>
        </div>
        <div className={style.workingPeriod}>
          <Icon className={style.icon} icon={<CalendarIcon />} path="currentColor" />
          <Text font="400-italic" className={style.text}>
            {workingPeriod}
          </Text>
        </div>
      </div>
    </div>
    <div className={style.description}>
      {description.map((line, index) => (
        <Text font="400-italic" className={style.line} key={index}>
          • {line}
        </Text>
      ))}
    </div>
  </div>
);

export default WorkplaceCard;
