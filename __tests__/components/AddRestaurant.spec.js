import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer'
import AddRestaurant from '../../src/components/AddRestaurant';
import AddRestaurantModal from './../../src/components/AddRestaurantModal';

const testID = (id) => {
  return cmp => cmp.props().testID === id
}

describe("Add Restaurant", () => {


  it('should have a add Restaurant button', () => {
    const handleButtonPress = jest.fn()
    const wrapper = shallow(<AddRestaurant onButtonPress={handleButtonPress} />)
    wrapper.findWhere(testID('addRestaurantButton')).simulate('press')
    expect(handleButtonPress).toHaveBeenCalled()
  })

  it('adds restaurant by calling onSave with input text', () => {

    const message = "hello world"
    const handleSave = jest.fn()
    const wrapper = shallow(<AddRestaurantModal visible={true} onSave={handleSave} />)
    wrapper.findWhere(testID('addRestaurantText')).simulate('changeText', message)
    wrapper.findWhere(testID('addRestaurantSaveButton')).simulate('press')
    expect(handleSave).toHaveBeenCalledWith(message)



  })
})