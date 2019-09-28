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
import RestaurantList from './components/RestaurantList';


class App extends Component {

  constructor(props) {
    super(props)

  }


  render() {

    return (
      <View style={styles.container}>
        <RestaurantList />
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
