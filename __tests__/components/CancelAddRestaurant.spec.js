import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer'
import AddRestaurant from '../../src/components/AddRestaurant';
import AddRestaurantModal from './../../src/components/AddRestaurantModal';

const testID = (id) => {
  return cmp => cmp.props().testID === id
}

describe("Upon Cancellation", () => {
  let handleCancel
  let wrapper
  beforeEach(() => {
    handleCancel = jest.fn()
    wrapper = shallow(<AddRestaurantModal visible={true} onCancel={handleCancel} />)
    wrapper.findWhere(testID('cancelAddRestaurantButton')).simulate('press')

  })

  it('clears the restaurant input field', () => {
    expect(wrapper.findWhere(testID('addRestaurantText')).props().value).toEqual('')


  })

  it('calls the cancel method', () => {
    expect(handleCancel).toHaveBeenCalled()
  })
})