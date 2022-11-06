import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Text } from 'components/UI/Text';
import { Container } from 'components/Helpers/Container';
import { Button } from 'components/UI/Button';
import style from './Home.module.scss';

const Home: React.FC = () => {
  const { t } = useTranslation(['mainscreen']);
  const navigate = useNavigate();
  const handleChangeRoute = useCallback((route: string) => () => navigate(route), [navigate]);
  const buttons = ['portfolio', 'about'];
  return (
    <Container
      className={style.wrapper}
      flexdirection="column"
      justifycontent="center"
      alignitems="center"
      fullHeight
    >
      <Text tag="h1" textalign="center" className={style.name}>
        {t('name')}
      </Text>
      <Text tag="h2" textalign="center" className={style.position}>
        {t('position')}
      </Text>
      <Container className={style.actions} fullWidth gap={20} justifycontent="space-evenly">
        {buttons.map((item) => (
          <Button
            key={item}
            className={style.button}
            label={t(item) as string}
            font="700"
            onClick={handleChangeRoute(`/${item}`)}
          />
        ))}
      </Container>
    </Container>
  );
};

export default Home;
