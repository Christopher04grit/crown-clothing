import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './App.css';

import HomePage from './pages/hompage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckoutPage from './pages/checkout/checkout.component';

import Header from './component/header/header.component';
import ProtectedRoute from './component/protected-route/protected-route.component';

import { checkUserSession } from './redux/user/user.actions';

class App extends React.Component {

  unsubscribeFromAuth = null;

  componentDidMount() {
    const { checkUserSession } = this.props;
    checkUserSession();
  }

  render() {
    return (
      <div className='App'>
        <Header  />
        <Routes>
          <Route  path='' element={<HomePage />}/>
         <Route  path='/shop/*' element={<ShopPage />}/>
          <Route  path='/checkout' element={<CheckoutPage />}/>
          <Route
            path='/signin'
            element={
              <ProtectedRoute >
                <SignInAndSignUp/>
              </ProtectedRoute>
            }
            
          />
        </Routes>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  // currentUser: setCurrentUser,
})

const mapDispatchToProps = dispatch => ({
    checkUserSession: () => dispatch(checkUserSession())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps 
)(App);

