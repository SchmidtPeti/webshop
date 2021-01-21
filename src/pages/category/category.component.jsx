import React from 'react';

import CollectionItem from '../../components/collection-item/collection-item.component';

import {connect} from 'react-redux';

import './category.styles.scss';

const CategoryPage = ({match,collections}) => {
    //const filtered = collections.find(item=>item.routeName===match.params.categoryId);
    const filtered = collections[match.params.categoryId];
    const {title, items} = filtered;
    return (<div className='collection-page'>
        <h2 className='title'>{title}</h2>
        <div className='items'>
            {
                items.map(item=> (
                    <CollectionItem className='collection-item' key={item.id} item={item}/>
                ))
            }
        </div>
    </div>)
    };
    const mapStateToProps = ({shop : {collections}}) => ({
        collections
      });

export default connect(mapStateToProps)(CategoryPage);