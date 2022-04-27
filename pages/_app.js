import React from 'react';
import PropTypes from 'prop-types';
import { CacheProvider } from '@emotion/react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import createEmotionCache from '../utility/createEmotionCache';
import mainTheme from '../styles/theme/main';
import '../styles/globals.scss';

const clientSideEmotionCache = createEmotionCache();

const App = ({ Component, emotionCache = clientSideEmotionCache, pageProps }) => (
  <CacheProvider value={emotionCache}>
    <ThemeProvider theme={mainTheme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  </CacheProvider>
);

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};

export default App;
