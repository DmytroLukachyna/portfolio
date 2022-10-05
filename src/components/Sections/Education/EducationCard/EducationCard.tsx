import React from 'react';
import { useTranslation } from 'react-i18next';
import { Text } from 'components/UI/Text';
import { Icon } from 'components/UI/Icon';
import { ReactComponent as KPIIcon } from 'assets/svg/education/kpi.svg';
import { ReactComponent as LocationIcon } from 'assets/svg/work/location.svg';
import { ReactComponent as CalendarIcon } from 'assets/svg/work/calendar.svg';
import style from './EducationCard.module.scss';

const EducationCard: React.FC = () => {
  const { t } = useTranslation(['education']);
  return (
    <div className={style.card}>
      <div className={style.logo}>
        <Icon className={style.icon} icon={<KPIIcon />} path="currentColor" />
      </div>
      <div className={style.wrapper}>
        <Text font="700" className={style.diploma}>
          {t('diploma')}
        </Text>
        <div className={style.location}>
          <Icon className={style.icon} icon={<LocationIcon />} path="currentColor" />
          <Text font="400-italic" className={style.text}>
            {t('almamater')}
          </Text>
        </div>
        <div className={style.studyPeriod}>
          <Icon className={style.icon} icon={<CalendarIcon />} path="currentColor" />
          <Text font="400-italic" className={style.text}>
            {t('studyPeriod')}
          </Text>
        </div>
      </div>
    </div>
  );
};

export default EducationCard;
