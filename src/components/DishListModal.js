import React, { Component } from 'react'
import { View, Modal, StyleSheet } from 'react-native'
import { Input, Text, Button } from 'react-native-elements'
class DishListModal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dishName: '',
      errorMessage: ''
    }
  }

  handleSaveText = (text) => {
    this.setState({
      dishName: text
    })
  }
  handleSave = () => {
    const { dishName } = this.state;
    const { onSave } = this.props;
    if (dishName === '') {
      handleErrorMessage()
      return
    }
    onSave(dishName)
    this.setState({
      errorMessage: '',
      dishName: ''
    })

  }
  handleCancel = () => {
    const { onCancel } = this.props;
    onCancel()
    this.setState({
      errorMessage: '',
      dishName: ''
    })
  }
  handleErrorMessage = () => {
    this.setState({
      errorMessage: 'THIS FIELD IS REQUIRED'
    })
  }
  render() {
    const { errorMessage, dishName } = this.state
    const { visible } = this.props
    return (
      <View style={styles.container}>
        <Modal
          visible={visible}
          animationType='slide'
        >
          <Text h3 style={{ margin: 20 }}>Add Dish</Text>

          <Input
            label="Dish Name"
            testID="addDishText"
            value={dishName}
            onChangeText={this.handleSaveText}
            autoFocus={true}
            errorStyle={{ color: 'red' }}
            errorMessage={errorMessage}
          />
          <Button
            testID="addDishSaveButton"
            title="Save"
            onPress={this.handleSave}
          ></Button>
          <Button
            testID="cancelAddDishButton"
            title="Cancel"
            onPress={this.handleCancel}
          ></Button>

        </Modal>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default DishListModal