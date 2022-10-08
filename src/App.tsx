import React from 'react';
import useWindowSize from 'hooks/useWindowSize';
import { WidthWarning } from 'components/Sections/WidthWarning';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { I18nextProvider } from 'react-i18next';
import { PageContainer } from 'components/Helpers/PageContainer';
import i18n from './i18n';
import { NavigationProvider } from 'components/Navigation/NavigationProvider';
import routes from 'routes/routes';

const router = createBrowserRouter([
  {
    path: '/',
    element: <PageContainer />,
    children: routes.map((route) => ({
      index: route.path === '/',
      path: route.path === '/' ? undefined : route.path,
      element: route.element,
    })),
    // errorElement: <NotFoundPage />,
  },
]);

const App: React.FC = () => {
  const [width] = useWindowSize();

  if (width < 320) return <WidthWarning />;
  return (
    <>
      <I18nextProvider i18n={i18n}>
        <NavigationProvider>
          <HelmetProvider>
            <RouterProvider router={router} />
          </HelmetProvider>
        </NavigationProvider>
      </I18nextProvider>
    </>
  );
};

export default App;
