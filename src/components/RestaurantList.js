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
import { inject, observer } from 'mobx-react'
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation'
import AddRestaurant from './AddRestaurant';
import AddRestaurantModal from './AddRestaurantModal';

@inject('restaurantStore')
@observer
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
    const { restaurantStore } = this.props
    this.setState(
      {
        isVisible: false
      }
    )
    restaurantStore.addRestaurant(restaurant)

  }

  handleCancel = () => {
    this.setState({ isVisible: false })
  }


  render() {
    const { navigation } = this.props
    const { restaurants } = this.props.restaurantStore
    return (
      <View >
        <AddRestaurant onButtonPress={this.onHandlePress} />
        <AddRestaurantModal visible={this.state.isVisible} onSave={this.handleSave} onCancel={this.handleCancel} />
        <FlatList
          data={restaurants.slice()}
          keyExtractor={item => item.name}
          renderItem={({ item: restaurants }) => (<ListItem title={restaurants.name} chevron onPress={() => navigation.navigate('DishList', { restaurants })} />)}

        />
      </View >
    );
  }
};


export default RestaurantList;


