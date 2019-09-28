import React from 'react';
import { shallow } from 'enzyme';
import App from '../../src/App';
import renderer from 'react-test-renderer'
import AddRestaurant from '../../src/components/AddRestaurant';
import AddRestaurantModal from './../../src/components/AddRestaurantModal';

const testID = (id) => {
  return cmp => cmp.props().testID === id
}

describe("Render Restaurant", () => {
  it('should render restaurant component', () => {
    const wrapper = renderer.create(<App />).toJSON()
    expect(wrapper).toMatchSnapshot()

  })


})