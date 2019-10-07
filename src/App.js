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
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import RestaurantList from './components/RestaurantList';
import DishList from './components/DishList';



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
        <RootStack />
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
