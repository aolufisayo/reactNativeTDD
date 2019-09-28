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
import { ListItem } from 'react-native-elements'
import AddRestaurant from './components/AddRestaurant';
import AddRestaurantModal from './components/AddRestaurantModal';


class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isVisible: false,
      restaurantNames: []
    }
  }

  onHandlePress = () => {
    this.setState({ isVisible: !this.state.isVisible })

    //console.log(this.state.isVisible)
    Reactotron.log({
      name: 'onHandlePress',
      value: this.state.isVisible
    })
  }

  handleSave = (restaurant) => {
    Reactotron.log({
      name: 'handleSave from app.js',
      value: this.state.restaurantNames
    })
    this.setState((prevState) => (
      {
        isVisible: false,
        restaurantNames: [restaurant, ...prevState.restaurantNames]
      }
    ))
    //console.log("hello", this.props.message)
    Reactotron.log({
      name: 'handleSave from app.js',
      value: restaurant
    })
  }


  render() {
    const { restaurantNames } = this.state
    return (
      <View >
        <AddRestaurant onButtonPress={this.onHandlePress} />

        <AddRestaurantModal visible={this.state.isVisible} onSave={this.handleSave} />


        <FlatList
          data={restaurantNames}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => <ListItem title={item} />}
        />

      </View >
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default App;
