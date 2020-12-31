import React from 'react';
import { css } from '@emotion/react';
import { Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';
import Orders from './components/Orders';
import Footer from './components/Footer';

const appStyles = css`
  display: grid;
  width: 100%;
  height: 100vh;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;
`;

const App = () => (
  <div css={appStyles}>
    <Header />
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/orders' component={Orders} />
    </Switch>
    <Footer />
  </div>
);

export default App;
