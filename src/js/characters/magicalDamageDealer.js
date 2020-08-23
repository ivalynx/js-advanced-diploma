import Character from '../Character';

export default class magicalDamageDealer extends Character {
  constructor(level, type = 'magical') {
    super(level, type);
    this.attack = 10;
    this.defence = 40;
    if (new.target.name === 'magicalDamageDealer') {
      throw (new Error('И так тоже нельзя создавать персонажа'));
    }
  }
}
