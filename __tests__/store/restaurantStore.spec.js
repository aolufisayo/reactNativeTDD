import RestaurantStore from './../../src/store/RestaurantStore';
describe('restaurant Store', () => {
  describe('Constructor', () => {
    it('initialize an empty restaurant array', () => {
      const newRestaurantStore = new RestaurantStore()
      expect(newRestaurantStore.restaurants).toEqual([])
    })

  })
  describe('addRestaurant', () => {
    it('add a new restaurant instance to the restaurant list', () => {
      const name = 'chicken republic'
      const newRestaurantStore = new RestaurantStore()
      newRestaurantStore.addRestaurant(name)
      expect(newRestaurantStore.restaurants.length).toEqual(1)
      const restaurant = newRestaurantStore.restaurants[0]
      expect(restaurant.name).toEqual(name)
    })
  })

})