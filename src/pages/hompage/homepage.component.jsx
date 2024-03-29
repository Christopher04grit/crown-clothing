import React from 'react';

import './homepage.styles.scss';

import Directory from '../../directory/directory.component';

import {HomePageContainer} from './homepage.styles'

const HomePage = () => {
  return (
    <HomePageContainer>
      <Directory/>
    </HomePageContainer>
  );
}

export default HomePage;