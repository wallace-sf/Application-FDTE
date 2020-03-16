import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import Routes from '~/routes';
import GlobalStyles from '~/styles/global';
import georgia from '~/assets/fonts/georgia.ttf';
import georgiaPro from '~/assets/fonts/GeorgiaPro-CondRegular.ttf';

function App() {
  return (
    <BrowserRouter>
      <Routes />
      <GlobalStyles />
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,700&display=swap"
          rel="stylesheet"
        />
        <link href={georgia} rel="stylesheet" />
        <link href={georgiaPro} rel="stylesheet" />
      </Helmet>
    </BrowserRouter>
  );
}

export default App;
