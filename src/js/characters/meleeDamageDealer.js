import Character from '../Character';

export default class meleeDamageDealer extends Character {
  constructor(level, type = 'meleeDamageDealer') {
    super(level, type);
    this.attack = 40;
    this.defence = 10;
    if (new.target.name === 'meleeDamageDealer') {
      throw (new Error('И так тоже нельзя создавать персонажа'));
    }
  }
}
