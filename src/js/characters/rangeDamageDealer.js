import Character from '../Character';

export default class rangeDamageDealer extends Character {
  constructor(level, type = 'rangeDamageDealer') {
    super(level, type);
    this.attack = 25;
    this.defence = 25;
    if (new.target.name === 'rangeDamageDealer') {
      throw (new Error('И так тоже нельзя создавать персонажа'));
    }
  }
}
