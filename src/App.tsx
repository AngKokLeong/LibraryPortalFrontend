import React from 'react';
import './App.css';
import { Navbar } from './layouts/NavbarAndFooter/Navbar';
import { Footer } from './layouts/NavbarAndFooter/Footer';
import { HomePage } from './layouts/HomePage/HomePage';
import { SearchBooksPage } from './layouts/SearchBooksPage/SearchBooksPage';
import { Route, Switch, Redirect, useHistory } from 'react-router-dom';
import { HOME_ROUTE, SLASH, SEARCH_ROUTE, BOOK_CHECKOUT_ROUTE, BOOK_CHECKOUT_BOOKID_PARAMETER } from './config/route-config';
import { BookCheckoutPage } from './layouts/BookCheckoutPage/BookCheckoutPage';
import { oktaConfig } from './lib/oktaConfig';
import { OktaAuth, toRelativeUrl } from '@okta/okta-auth-js';
import { LoginCallback, SecureRoute, Security } from '@okta/okta-react';
import LoginWidget from './Auth/LoginWidget';
import { ReviewListPage } from './layouts/BookCheckoutPage/ReviewListPage/ReviewListPage';
import { ShelfPage } from './layouts/ShelfPage/ShelfPage';
import { MessagesPage } from './layouts/MessagesPage/MessagesPage';
import { ManageLibraryPage } from './layouts/ManageLibraryPage/ManageLibraryPage';
import { PaymentPage } from './layouts/PaymentPage/PaymentPage';

const oktaAuth = new OktaAuth(oktaConfig);

export const App = () => {

  const customAuthHandler = () => {
    history.push('/login');
  }

  const history = useHistory();

  const restoreOriginalUri = async (_oktaAuth: any, originalUrl: any) => {
    history.replace(toRelativeUrl(originalUrl || '/', window.location.origin));
  };

  return (
    <div className='d-flex flex-column min-vh-100'>
      <Security oktaAuth={oktaAuth} restoreOriginalUri={restoreOriginalUri} onAuthRequired={customAuthHandler}>
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

            <Route path={'/reviewlist/:bookId'}>
              <ReviewListPage ></ReviewListPage>
            </Route>

            <Route path={BOOK_CHECKOUT_ROUTE + BOOK_CHECKOUT_BOOKID_PARAMETER}>
              <BookCheckoutPage />
            </Route>

            <Route path='/login' render={
                () => <LoginWidget config={oktaConfig} />
              } 
            />

            <Route path='/login/callback' component={LoginCallback} />
            <SecureRoute path='/shelf'>
              <ShelfPage />
            </SecureRoute>
            <SecureRoute path='/messages'><MessagesPage /></SecureRoute>
            <SecureRoute path='/admin'><ManageLibraryPage /></SecureRoute>
            <SecureRoute path='/fees'><PaymentPage /></SecureRoute>
          </Switch>
        </div>
        <Footer />
      </Security>
    </div>
  );
}