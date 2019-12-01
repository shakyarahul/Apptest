import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import {
  createAppContainer,
} from 'react-navigation';
import {
  HomeScreen,
  RegisterScreen,
  PickerScreen
} from '../Screens';

const HomeStack = createStackNavigator(
  {
    home: { screen: HomeScreen },
    register: { screen: RegisterScreen },
    picker: {screen: PickerScreen}
  },
  {
    headerMode: 'none',
    initialRouteName: 'home'
  },
);

export default createAppContainer(HomeStack);