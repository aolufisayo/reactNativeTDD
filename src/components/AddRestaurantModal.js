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
  Modal,
  View,
  TextInput
} from 'react-native';
import { Text, Button, Input, FormValidationMessage } from 'react-native-elements'
import Reactotron from 'reactotron-react-native'


class AddRestaurantModal extends Component {

  constructor(props) {
    super(props)
    this.state = {
      restaurantName: '',
      errorMessage: ''
    }

  }
  handleSaveText = (restaurantName) => {
    this.setState({ restaurantName })
  }

  handleSave = () => {
    const { restaurantName } = this.state
    const { onSave } = this.props
    if (restaurantName === '') {
      this.handleError()
      return
    }
    onSave(restaurantName)
    this.setState({ restaurantName: '' })
  }

  handleCancel = () => {
    const { onCancel } = this.props;
    onCancel()
    this.setState({ restaurantName: '', errorMessage: '' })
  }

  handleError = () => {
    this.setState({ errorMessage: 'THIS FIELD IS REQUIRED' })
  }

  render() {
    const { visible } = this.props
    const { restaurantName, errorMessage } = this.state


    return (
      <View style={styles.container}>
        <Modal
          visible={visible}
          animationType='slide'
        >
          <Text h3 style={{ margin: 20 }}>Add Restaurant</Text>

          <Input
            label="Restaurant Name"
            testID="addRestaurantText"
            value={restaurantName}
            onChangeText={this.handleSaveText}
            autoFocus={true}
            errorStyle={{ color: 'red' }}
            errorMessage={errorMessage}
          />
          <Button
            testID="addRestaurantSaveButton"
            title="Save"
            onPress={this.handleSave}
          ></Button>
          <Button
            testID="cancelAddRestaurantButton"
            title="Cancel"
            onPress={this.handleCancel}
          ></Button>

        </Modal>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default AddRestaurantModal;
