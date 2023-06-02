import React from 'react';
import './App.css';
import { Navbar } from './layouts/NavbarAndFooter/Navbar';
import { Footer } from './layouts/NavbarAndFooter/Footer';
import { HomePage } from './layouts/HomePage/HomePage';
import { SearchBooksPage } from './layouts/SearchBooksPage/SearchBooksPage';
import { Route, Switch, Redirect } from 'react-router-dom';
import { HOME_ROUTE, SLASH, SEARCH_ROUTE} from './config/route-config';

export const App = () => {
  return (
    <div>
      <Navbar />

      <Switch>
        <Route path={SLASH} exact>
          <Redirect to={HOME_ROUTE} />
        </Route>

        <Route path={HOME_ROUTE}>
          <HomePage />
        </Route>

        <Route path={SEARCH_ROUTE}>
          <SearchBooksPage />
        </Route>

      </Switch>
      <Footer />
    </div>
  );
}