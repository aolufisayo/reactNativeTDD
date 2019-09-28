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
import AddRestaurant from './AddRestaurant';
import AddRestaurantModal from './AddRestaurantModal';


class RestaurantList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isVisible: false,
      restaurantNames: []
    }
  }

  onHandlePress = () => {
    this.setState({ isVisible: !this.state.isVisible })

  }

  handleSave = (restaurant) => {
    this.setState((prevState) => (
      {
        isVisible: false,
        restaurantNames: [restaurant, ...prevState.restaurantNames]
      }
    ))

  }

  handleCancelPress = () => {
    this.setState({ isVisible: false })
  }


  render() {
    const { restaurantNames } = this.state
    return (
      <View >
        <AddRestaurant onButtonPress={this.onHandlePress} />

        <AddRestaurantModal visible={this.state.isVisible} onSave={this.handleSave} onCancel={this.handleCancelPress} />


        < FlatList
          data={restaurantNames}
          keyExtractor={item => item}
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

export default RestaurantList;
