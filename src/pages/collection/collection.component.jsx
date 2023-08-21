import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectCollection } from '../../redux/shop/shop.selectors';
import CollectionItem from '../../component/collection-item/collection-item.component'

import './collection.styles.scss';

const CollectionPage = () => {
  const { collectionId } = useParams();
  const collection = useSelector(selectCollection(collectionId));
  const {title, items} = collection;

  console.log("useSelector:",collection)
  console.log("check:",collectionId)

  return (
    <div className='collection-page'>
      <h2 className='title'>{title}</h2> 
      <div className="items">
        {items.map(item => (
          <CollectionItem key={item.id} item={item}/>
        ))}
      </div>
    </div> 
  );
};

export default CollectionPage;








