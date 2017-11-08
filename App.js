/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Home from './src/components/Home'
import App from './src/components/Launch'

const RootNavigator = StackNavigator({
  First: {
    screen: App,
  },
  Chalo :{
    screen:Home
  }
});

export default RootNavigator