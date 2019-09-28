/**
 * Sample React Native AddRestaurant
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
  Button
} from 'react-native';
import Reactotron from 'reactotron-react-native'


class AddRestaurant extends Component {

  constructor(props) {
    super(props)

  }

  handlePress = () => {
    const { onButtonPress } = this.props

    onButtonPress()

  }
  render() {
    return (
      <View >
        <Button
          testID="addRestaurantButton"
          title="Add Restaurant"
          onPress={this.handlePress}
        ></Button>

      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'center'
  }
});

export default AddRestaurant;
