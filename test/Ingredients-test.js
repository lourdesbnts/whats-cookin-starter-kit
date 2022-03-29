import { expect } from 'chai';
import Ingredients from '../src/classes/Ingredients';

describe('Ingredient', () => {
 let ingredient, ingredient1, ingredient2;


  beforeEach( () => {
   ingredient = new Ingredients()
   ingredient1 = new Ingredients(20081, 'wheat flour', 142)
   ingredient2 =new Ingredients(18372, 'bicarbonate of soda', 582)

 });
  it('should be a function', () => {
   expect(Ingredients).to.be.a('function');
 });

 it('should create a new instance of Ingredient', () => {
   expect(ingredient).to.be.an.instanceof(Ingredients);
 });

 it('should have an id', () => {
   expect(ingredient1.id).to.equal(20081);
 });

 it('should have a name', () => {
   expect(ingredient1.name).to.equal('wheat flour');
 })

 
});
