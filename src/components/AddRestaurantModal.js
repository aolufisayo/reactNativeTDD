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
  TextInput,
  Text
} from 'react-native';
import { Button, Input } from 'react-native-elements'
import Reactotron from 'reactotron-react-native'


class AddRestaurantModal extends Component {

  constructor(props) {
    super(props)
    this.state = {
      text: ''
    }

  }

  handleSaveText = (text) => {
    this.setState({ text })

  }

  handleSave = () => {
    const { text } = this.state
    const { onSave } = this.props
    Reactotron.log({
      name: 'handleSave from restaurant modal',
      value: this.state.text
    })

    onSave(text)
    this.setState({ text: '' })
  }

  handleCancel = () => {
    const { onCancel } = this.props;
    onCancel()
    this.setState({ text: '' })
  }
  render() {
    const { visible } = this.props
    const { text } = this.state


    return (
      <View style={styles.container}>
        <Modal
          visible={visible}
          animationType='slide'
        >

          <Input
            label="Restaurant Name"
            testID="addRestaurantText"
            value={text}
            onChangeText={this.handleSaveText}
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
