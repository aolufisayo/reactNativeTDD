import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer'
import AddRestaurant from '../../src/components/AddRestaurant';
import AddRestaurantModal from './../../src/components/AddRestaurantModal';



describe("Add restaurant Modal", () => {

  const testID = (id) => {
    return cmp => cmp.props().testID === id
  }

  describe("onClick Add Restaurant Button", () => {
    let message = "hello world"
    let handleButtonPress
    let wrapper
    beforeEach(() => {
      handleButtonPress = jest.fn()
      wrapper = shallow(<AddRestaurant onButtonPress={handleButtonPress} />)
      wrapper.findWhere(testID('addRestaurantButton')).simulate('press')
    })

    it('call the submit method', () => {
      expect(handleButtonPress).toHaveBeenCalled()
    })

  })

  describe("Upon Save Restaurant", () => {
    let message = "hello world"
    let handleSave
    let wrapper
    beforeEach(() => {
      handleSave = jest.fn()
      wrapper = shallow(<AddRestaurantModal visible={true} onSave={handleSave} />)
      wrapper.findWhere(testID('addRestaurantText')).simulate('changeText', message)
      wrapper.findWhere(testID('addRestaurantSaveButton')).simulate('press')
    })

    it('adds restaurant by calling onSave with input text', () => {
      expect(handleSave).toHaveBeenCalledWith(message)

    })
  })


  describe("Upon submit with Invalid Data", () => {
    let handleSave
    let wrapper
    beforeEach(() => {
      handleSave = jest.fn()
      wrapper = shallow(<AddRestaurantModal visible={true} onSave={handleSave} />)
      wrapper.findWhere(testID('addRestaurantSaveButton')).simulate('press')
    })

    it('not call onSave method', () => {
      expect(handleSave).not.toHaveBeenCalled()

    })

    it('displays validation error message', () => {
      let errorComponent = renderer.create(<AddRestaurantModal />).getInstance()
      errorComponent.handleSave('')
      expect(errorComponent.state.errorMessage).toEqual('THIS FIELD IS REQUIRED')
    })
  })

})


