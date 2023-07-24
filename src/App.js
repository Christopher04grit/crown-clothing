import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';

import HomePage from './pages/hompage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './component/header/header.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils'
import { setCurrentUser } from './redux/user/user.actions';
import ProtectedRoute from './component/protected-route/protected-route.component';

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
          });
        });
      }

      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className='App'>
        <Header />
        <Routes>
          <Route  path='/' element={<HomePage />}/>
          <Route  path='/shop' element={<ShopPage />}/>
          <Route
            path='/signin'
            element={
              <ProtectedRoute>
                <SignInAndSignUp/>
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
  null,
  mapDispatchToProps
)(App);