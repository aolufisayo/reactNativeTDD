import { observable } from 'mobx'
import Restaurant from './Restaurant';

export default class RestaurantStore {
  @observable restaurants = []

  addRestaurant(restaurantName) {
    const newRestaurant = new Restaurant(restaurantName)
    this.restaurants.push(newRestaurant)
  }
}