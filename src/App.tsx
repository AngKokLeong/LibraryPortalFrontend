import React from 'react';
import './App.css';
import { Navbar } from './layouts/NavbarAndFooter/Navbar';
import { Footer } from './layouts/NavbarAndFooter/Footer';
import { HomePage } from './layouts/HomePage/HomePage';
import { SearchBooksPage } from './layouts/SearchBooksPage/SearchBooksPage';
import { Route, Switch, Redirect } from 'react-router-dom';
import { HOME_ROUTE, SLASH, SEARCH_ROUTE, BOOK_CHECKOUT_ROUTE, BOOK_CHECKOUT_BOOKID_PARAMETER } from './config/route-config';
import { BookCheckoutPage } from './layouts/BookCheckoutPage/BookCheckoutPage';

export const App = () => {
  return (
    <div className='d-flex flex-column min-vh-100'>
      <Navbar />

      <div className='flex-grow-1'>
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

          <Route path={BOOK_CHECKOUT_ROUTE + BOOK_CHECKOUT_BOOKID_PARAMETER}>
            <BookCheckoutPage />
          </Route>

        </Switch>
      </div>
      <Footer />
    </div>
  );
}