import React from 'react';
import { connect } from 'react-redux';


import { Route, Routes } from 'react-router-dom';

import CollectionsOverview from '../../component/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';
import { updateCollections } from '../../redux/shop/shop.actions';
import withSpinner from '../../component/with-spinner/with-spinner.component';

const CollectionsOverviewWithSpinner = withSpinner(CollectionsOverview);
const CollectionPageWithSpinner = withSpinner(CollectionPage);

class ShopPage extends React.Component {

  state = {
    loading: true
  };

  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection('collections');

     collectionRef.get().then(snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
      updateCollections(collectionsMap);
      this.setState({ loading: false });
    })
     
  };

  render() {
    const { loading } = this.state;
    return (
      <div className='shop-page'>
        <Routes>
          <Route index element={<CollectionsOverviewWithSpinner isLoading={loading} {...this.props} />}/>
          <Route path=':collectionId' element={<CollectionPageWithSpinner isLoading={loading} {...this.props} />}/>
        </Routes>
      </div>
    )
  }
};

const mapDispatchToProps = dispatch => ({
  updateCollections: collectionsMap => 
  dispatch(updateCollections(collectionsMap))
})



export default connect(null, mapDispatchToProps)(ShopPage);