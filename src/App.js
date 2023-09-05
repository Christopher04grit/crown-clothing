import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';

import HomePage from './pages/hompage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckoutPage from './pages/checkout/checkout.component';

import Header from './component/header/header.component';
import ProtectedRoute from './component/protected-route/protected-route.component';

import { auth, createUserProfileDocument, addCollectionAndDocuments } from './firebase/firebase.utils'
import { setCurrentUser } from './redux/user/user.actions'; 
import { selectCollectionsForPreview } from './redux/shop/shop.selectors';
import { createStructuredSelector } from 'reselect';

class App extends React.Component {

  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser, collectionsArray } = this.props;

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
      addCollectionAndDocuments('collections', collectionsArray.map(({title, items}) => ({title, items})));
    });
  }


  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }


  render() {
    return (
      <div className='App'>
        <Header  />
        <Routes>
          <Route  path='/' element={<HomePage />}/>
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
  collectionsArray: selectCollectionsForPreview
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);