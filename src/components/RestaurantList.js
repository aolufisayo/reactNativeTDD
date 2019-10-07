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
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation'
import AddRestaurant from './AddRestaurant';
import AddRestaurantModal from './AddRestaurantModal';


class RestaurantList extends Component {
  static navigationOptions = {
    title: 'Restaurants'
  }

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

  handleCancel = () => {
    this.setState({ isVisible: false })
  }


  render() {
    const { navigation } = this.props
    const { restaurantNames } = this.state
    return (
      <View >
        <AddRestaurant onButtonPress={this.onHandlePress} />
        <AddRestaurantModal visible={this.state.isVisible} onSave={this.handleSave} onCancel={this.handleCancel} />
        <FlatList
          data={restaurantNames}
          keyExtractor={item => item}
          renderItem={({ item }) => (<ListItem title={item} chevron onPress={() => navigation.navigate('DishList', { name: item })} />)}

        />
      </View >
    );
  }
};


export default RestaurantList;


