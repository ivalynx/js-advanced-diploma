import Character from '../Character';
import Bowerman from '../bowerman';

test('Если вызываем new Character, должно выбрасывать ошибку', () => {
  function result() {
    const char = new Character(1);
    return char;
  }
  expect(result).toThrow('Нельзя создавать персонажа таким образом');
});

test('Если вызываем new Bowerman, должно создавать персонажа', () => {
  const result = new Bowerman(1);
  expect(result).toEqual({
    attack: 0,
    defence: 0,
    health: 50,
    level: 1,
    type: 'bowman',
  });
});
