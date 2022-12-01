import React, { useRef } from 'react';
import { useLocation, useOutlet } from 'react-router-dom';
import { Navigation } from 'components/Navigation';
import { ThemeSwitch } from 'theme/ThemeSwitch';
import { Social } from 'components/Sections/Social';
import { Footer } from 'components/Sections/Footer';
import { ThemeProvider } from 'theme/Theme';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import useToggleShowNavigation from 'hooks/useToggleShowNavigation';
import { routes } from 'routes';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import style from './PageContainer.module.scss';

const PageContainer: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);

  useToggleShowNavigation({ currentRef: ref.current });

  const {
    t,
    i18n: { language },
  } = useTranslation(['general']);

  const location = useLocation();
  const currentOutlet = useOutlet();
  const { nodeRef } = routes.find((route) => route.path === location.pathname) ?? {};

  return (
    <ThemeProvider>
      <Helmet>
        <html lang={language} />
        <title>{t('page-title')}</title>
      </Helmet>
      <div ref={ref} className={style.outer}>
        <SwitchTransition>
          <CSSTransition
            key={location.pathname}
            nodeRef={nodeRef}
            timeout={300}
            in
            appear
            classNames={{
              enter: style.inner_enter,
              enterActive: style.inner_enterActive,
              exitActive: style.inner_exitActive,
              exitDone: style.inner_exitDone,
              appear: style.inner_appear,
              appearActive: style.inner_appearActive,
              appearDone: style.inner_appearDone,
              enterDone: style.inner_enterDone,
              exit: style.inner_exit,
            }}
            mountOnEnter
            unmountOnExit
          >
            <div ref={nodeRef} className={style.inner}>
              {currentOutlet}
            </div>
          </CSSTransition>
        </SwitchTransition>
      </div>
      <Navigation />
      <ThemeSwitch />
      <Social />
      <Footer />
    </ThemeProvider>
  );
};

export default PageContainer;
