import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { selectsIsCollectionsLoaded } from '../../redux/shop/shop.selectors';
import withSpinner from '../../component/with-spinner/with-spinner.component';
import CollectionPage from './collection.component';
const mapStateToProps = createStructuredSelector({
    isLoading: state => !selectsIsCollectionsLoaded(state)
});

const collectionPageContainer = compose(
    connect(mapStateToProps),
    withSpinner
)(CollectionPage);

export default collectionPageContainer;