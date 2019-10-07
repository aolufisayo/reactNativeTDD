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
import { Button, ListItem } from 'react-native-elements'
import DishListModal from './DishListModal';

class DishList extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('name')
    }
  }

  constructor(props) {
    super(props)
    this.state = {
      isVisible: false,
      dishNames: []
    }
  }

  handleButtonPress = () => {
    this.setState({
      isVisible: !this.state.isVisible
    })
  }

  handleSave = (dishName) => {
    this.setState((prevState) => ({
      isVisible: false,
      dishNames: [dishName, ...prevState.dishNames]
    }))
  }

  handleCancel = () => {
    this.setState({
      isVisible: false
    })
  }



  render() {
    const { dishNames } = this.state
    return (
      <View >
        <Button
          title='Add Dish'
          testID='AddDishButton'
          onPress={this.handleButtonPress}
        />
        <DishListModal visible={this.state.isVisible} onSave={this.handleSave} onCancel={this.handleCancel} />
        <FlatList
          data={dishNames}
          keyExtractor={item => item}
          renderItem={({ item }) => (<ListItem title={item} chevron />)}

        />
      </View >
    );
  }
};


export default DishList


