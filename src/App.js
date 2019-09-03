import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import client from './services/apollo';

import Dashboard from './pages/Dashboard';
import Edit from './pages/Edit';
import New from './pages/New';

import GlobalStyles from './styles/global';

export default function App() {
  return (
    <Router>
      <ApolloProvider client={client}>
        <Switch>
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/edit/:id" component={Edit} />
          <Route path="/new" component={New} />
        </Switch>
        <GlobalStyles />
      </ApolloProvider>
    </Router>
  );
}
