import Restaurant from './../../src/store/Restaurant';
describe('restaurants', () => {
  describe('constructor', () => {
    it('initialize an empty dishes array', () => {
      const restaurants = new Restaurant()
      expect(restaurants.dishNames).toEqual([])
    })
    it('initialize the name property', () => {
      const name = 'fried rice'
      const restaurants = new Restaurant(name)
      expect(restaurants.name).toEqual(name)
    })
  })
  describe('addDish', () => {
    it('adds a new dish into the array', () => {
      const dishName = 'fried rice'
      const restaurants = new Restaurant()
      restaurants.addDish(dishName)
      expect(restaurants.dishNames).toEqual([dishName])
    })
  })
})