/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  Button
} from 'react-native';
import Reactotron from 'reactotron-react-native'
import { Provider } from 'mobx-react'
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import RestaurantList from './components/RestaurantList';
import DishList from './components/DishList';
import RestaurantStore from './store/restaurantStore';

const restaurantStore = new RestaurantStore()

const rootStack = createStackNavigator({
  RestaurantList,
  DishList
}, {
    initialRouteName: 'RestaurantList'
  })

const RootStack = createAppContainer(rootStack);
class App extends Component {

  constructor(props) {
    super(props)

  }


  render() {

    return (
      <View style={styles.container}>
        <Provider restaurantStore={restaurantStore}>
          <RootStack />
        </Provider>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});



export default App;
