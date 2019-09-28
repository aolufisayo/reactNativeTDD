import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer'
import AddRestaurant from '../../src/components/AddRestaurant';
import AddRestaurantModal from './../../src/components/AddRestaurantModal';

const testID = (id) => {
  return cmp => cmp.props().testID === id
}

describe("Cancel Add Restaurant", () => {

  it('cancel adding restaurant by calling onCancel', () => {
    const handleCancel = jest.fn()
    const wrapper = shallow(<AddRestaurantModal visible={true} onCancel={handleCancel} />)
    wrapper.findWhere(testID('cancelAddRestaurantButton')).simulate('press')
    expect(handleCancel).toHaveBeenCalled()



  })
})