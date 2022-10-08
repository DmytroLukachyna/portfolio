import React from 'react';
import Photo from 'assets/img/profile/photo.jpeg';
import style from './AboutPhoto.module.scss';

const AboutPhoto: React.FC = () => {
  return <img className={style.photo} src={Photo} alt="My photo" />;
};

export default AboutPhoto;
