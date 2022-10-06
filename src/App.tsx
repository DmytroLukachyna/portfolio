import React from 'react';
import { ThemeProvider } from 'theme/Theme';
import useWindowSize from 'hooks/useWindowSize';
import AppRouter from './routes/AppRouter';
import { WidthWarning } from 'components/Sections/WidthWarning';
import { NavigationProvider } from 'components/Navigation/NavigationProvider';

const App: React.FC = () => {
  const [width] = useWindowSize();

  if (width < 320) return <WidthWarning />;

  return (
    <ThemeProvider>
      <NavigationProvider>
        <AppRouter />
      </NavigationProvider>
    </ThemeProvider>
  );
};

export default App;
