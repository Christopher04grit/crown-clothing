import React from 'react';

import { useParams, useNavigate } from 'react-router-dom';


import './menu-item.styles.scss';

const Menuitem = ({ title, imageUrl, size, linkUrl, match }) =>{
  // console.log(useParams)
  const {currentId} = useParams();
  console.log(currentId)
  const navigate = useNavigate();
  return(
    <div className={`${size} menu-item`} onClick={() => navigate(`${linkUrl}`)} >
        <div className='background-image' style={{backgroundImage: `url(${imageUrl})`}} />
        <div className='content'>
          <div className='title'>{title.toUpperCase()}</div>
          <span className='subtitle'>SHOP NOW</span>
        </div>
      </div>
)
}

export default Menuitem;