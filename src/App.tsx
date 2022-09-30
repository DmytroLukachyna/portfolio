import React from 'react';
import { ThemeProvider } from 'theme/Theme';
import useWindowSize from 'hooks/useWindowSize';
import AppRouter from './routes/AppRouter';
import { WidthWarning } from 'components/Sections/WidthWarning';

const App: React.FC = () => {
  const [width] = useWindowSize();

  if (width < 320) return <WidthWarning />;

  return (
    <ThemeProvider>
      <AppRouter />
    </ThemeProvider>
  );
};

export default App;
