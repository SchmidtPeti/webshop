import React from 'react';
import {connect} from 'react-redux';

import CollectionPreview from '../preview-collection/collection-preview';

import './collections-overview.styles.scss';

const CollectionsOverview = ({collections}) => (
    <div className='collections-overview'>
        {
            collections.map(({id,...otherCollectionProps}) => (
                <CollectionPreview key={id} {...otherCollectionProps}></CollectionPreview>
            ))
        }
    </div>
);
const mapStateToProps = ({shop : {collections}}) => ({
    collections : Object.keys(collections).map(key=> collections[key])
});

export default connect(mapStateToProps)(CollectionsOverview);

