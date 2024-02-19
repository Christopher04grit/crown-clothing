import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { selectsIsCollectionFetching } from '../../redux/shop/shop.selectors';
import withSpinner from '../with-spinner/with-spinner.component';
import CollectionsOverview from './collections-overview.component';

const mapStateToProps = createStructuredSelector({
    isLoading: selectsIsCollectionFetching
});

const collectionsOverviewContainer = compose(
    connect(mapStateToProps),
    withSpinner 
)(CollectionsOverview);

export default collectionsOverviewContainer;