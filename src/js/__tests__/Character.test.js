import Character from '../Character';
import MagicalDamageDealer from '../characters/magicalDamageDealer';
import MeleeDamageDealer from '../characters/meleeDamageDealer';
import RangeDamageDealer from '../characters/rangeDamageDealer';
import Bowman from '../characters/Bowman';
import Swordsman from '../characters/Swordsman';
import Magician from '../characters/Magician';
import Vampire from '../characters/Vampire';
import Undead from '../characters/Undead';
import Daemon from '../characters/Daemon';

test('Если вызываем new Character, должно выбрасывать ошибку', () => {
  function result() {
    const char = new Character(1);
    return char;
  }
  expect(result).toThrow('Нельзя создавать персонажа таким образом');
});

test('Если вызываем new MagicalDamageDealer, должно выбрасывать ошибку', () => {
  function result() {
    const char = new MagicalDamageDealer(1);
    return char;
  }
  expect(result).toThrow('И так тоже нельзя создавать персонажа');
});

test('Если вызываем new MeleeDamageDealer, должно выбрасывать ошибку', () => {
  function result() {
    const char = new MeleeDamageDealer(1);
    return char;
  }
  expect(result).toThrow('И так тоже нельзя создавать персонажа');
});

test('Если вызываем new RangeDamageDealer, должно выбрасывать ошибку', () => {
  function result() {
    const char = new RangeDamageDealer(1);
    return char;
  }
  expect(result).toThrow('И так тоже нельзя создавать персонажа');
});

test('Если вызываем new Bowman, должно создавать персонажа', () => {
  const result = new Bowman(1);
  expect(result).toEqual({
    attack: 25,
    defence: 25,
    health: 50,
    level: 1,
    type: 'bowman',
  });
});

test('Если вызываем new Swordsman, должно создавать персонажа', () => {
  const result = new Swordsman(1);
  expect(result).toEqual({
    attack: 40,
    defence: 10,
    health: 50,
    level: 1,
    type: 'swordsman',
  });
});

test('Если вызываем new Magician, должно создавать персонажа', () => {
  const result = new Magician(1);
  expect(result).toEqual({
    attack: 10,
    defence: 40,
    health: 50,
    level: 1,
    type: 'magician',
  });
});

test('Если вызываем new Vampire, должно создавать персонажа', () => {
  const result = new Vampire(1);
  expect(result).toEqual({
    attack: 25,
    defence: 25,
    health: 50,
    level: 1,
    type: 'vampire',
  });
});

test('Если вызываем new Undead, должно создавать персонажа', () => {
  const result = new Undead(1);
  expect(result).toEqual({
    attack: 40,
    defence: 10,
    health: 50,
    level: 1,
    type: 'undead',
  });
});

test('Если вызываем new Daemon, должно создавать персонажа', () => {
  const result = new Daemon(1);
  expect(result).toEqual({
    attack: 10,
    defence: 40,
    health: 50,
    level: 1,
    type: 'daemon',
  });
});
