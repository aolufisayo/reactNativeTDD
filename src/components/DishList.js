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
  Text,
  FlatList
} from 'react-native';
import { observer } from 'mobx-react'
import { Button, ListItem } from 'react-native-elements'
import DishListModal from './DishListModal';

@observer
class DishList extends Component {
  static navigationOptions = ({ navigation }) => {
    const restaurants = navigation.getParam('restaurants')
    return {
      title: restaurants.name
    }
  }

  constructor(props) {
    super(props)
    this.state = {
      isVisible: false
    }
  }

  handleButtonPress = () => {
    this.setState({
      isVisible: !this.state.isVisible
    })
  }

  handleSave = (dishName) => {
    const restaurants = this.props.navigation.getParam('restaurants')
    this.setState({
      isVisible: false
    })
    restaurants.addDish(dishName)
  }

  handleCancel = () => {
    this.setState({
      isVisible: false
    })
  }



  render() {
    const { dishNames } = this.props.navigation.getParam('restaurants')
    return (
      <View >
        <Button
          title='Add Dish'
          testID='AddDishButton'
          onPress={this.handleButtonPress}
        />
        <DishListModal visible={this.state.isVisible} onSave={this.handleSave} onCancel={this.handleCancel} />
        <FlatList
          data={dishNames.slice()}
          keyExtractor={item => item}
          renderItem={({ item }) => (<ListItem title={item} chevron />)}

        />
      </View >
    );
  }
};


export default DishList


