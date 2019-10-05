import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer'
import AddRestaurant from '../../src/components/AddRestaurant';

const testID = (id) => {
  return cmp => cmp.props().testID === id
}

describe("Render Restaurant", () => {
  it('should render restaurant component', () => {
    const wrapper = renderer.create(<AddRestaurant />).toJSON()
    expect(wrapper).toBeTruthy()

  })


})