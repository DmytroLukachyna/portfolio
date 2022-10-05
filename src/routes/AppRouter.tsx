import React, { lazy, Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import routes from './routes';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { Navigation } from 'components/Navigation';
import { ThemeSwitch } from 'theme/ThemeSwitch';
import { PageContainer } from 'components/Helpers/PageContainer';
import { NavigationProvider } from 'components/Navigation/NavigationProvider';
import { Social } from 'components/Sections/Social';
import { Footer } from 'components/Sections/Footer';
import { Loader } from 'components/Services/Loader';

const Home = lazy(() => import('pages/Home'));
const About = lazy(() => import('pages/About'));
const Portfolio = lazy(() => import('pages/Portfolio'));
const Education = lazy(() => import('pages/Education'));
const Experience = lazy(() => import('pages/Experience'));
import NotFoundPage from 'pages/NotFoundPage';

const AppRouter: React.FC = () => {
  const {
    t,
    i18n: { language },
  } = useTranslation(['general']);
  const { pathname } = useLocation();
  const about = pathname === '/about';
  return (
    <>
      <Helmet>
        <html lang={language} />
        <title>{t('page-title')}</title>
      </Helmet>
      <PageContainer>
        <Routes>
          <Route
            index
            element={
              <Suspense fallback={<Loader />}>
                <Home />
              </Suspense>
            }
          />
          <Route
            path={routes.about}
            element={
              <Suspense fallback={<Loader />}>
                <About />
              </Suspense>
            }
          />
          <Route
            path={routes.portfolio}
            element={
              <Suspense fallback={<Loader />}>
                <Portfolio />
              </Suspense>
            }
          />
          <Route
            path={routes.education}
            element={
              <Suspense fallback={<Loader />}>
                <Education />
              </Suspense>
            }
          />
          <Route
            path={routes.experience}
            element={
              <Suspense fallback={<Loader />}>
                <Experience />
              </Suspense>
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </PageContainer>
      <Footer />
      <NavigationProvider>
        <Navigation />
      </NavigationProvider>
      <ThemeSwitch />
      {!about && <Social />}
    </>
  );
};

export default AppRouter;
