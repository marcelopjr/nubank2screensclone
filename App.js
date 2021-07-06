import React from 'react';
import { StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native'
import { Routes } from './src/routes'


// import { Container } from './styles';

const MaBank = () => {

  return (
    <>
      <NavigationContainer>

        <StatusBar
          backgroundColor="transparent"
          translucent
          barStyle="light-content" />

        <Routes />
      </NavigationContainer>

    </>
  )

}

export default MaBank;