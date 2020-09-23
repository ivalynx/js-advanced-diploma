import { generateTeam } from './generators';
import Character from './Character';

export default class Team {
  constructor(type, allowedTypes) {
    this.type = type;
    this.allowedTypes = allowedTypes;
    this.members = new Set();
  }

  createTeam(level, userTeam) {
    const characterCount = this.checkCharacterCount(level, userTeam);
    const allowedTypes = this.checkAllowedTypes(level);
    const maxLevel = level;
    const { possiblePositions } = this;
    // console.log(`${this.type} possiblePositions`);
    // console.log(this.possiblePositions);
    const result = generateTeam(allowedTypes, maxLevel, characterCount, possiblePositions);
    this.addAll(result);
  }

  checkCharacterCount(level, userTeam) {
    if (this.type === 'user' && level === 1) {
      return 2;
    } if (this.type === 'computer') {
      const array = userTeam.toArray();
      return array.length + 1;
    } throw (new Error('Невозможно создать группу для этого игрока'));
  }

  checkAllowedTypes(level) {
    let end = level + 1;
    const playerAllowedTypes = this.allowedTypes;
    if (level > playerAllowedTypes.length) {
      end = playerAllowedTypes.length;
    }
    return playerAllowedTypes.slice(0, end);
  }

  add(member) {
    if (member instanceof Character) {
      if (this.members.has(member)) {
        throw (new Error('Нельзя добавить персонажа, который уже есть в команде'));
      }
      this.members.add(member);
    } else {
      throw (new Error('Добавить можно только объект класса Character'));
    }
  }

  addAll(...rest) {
    rest.forEach((member) => {
      this.members.add(member);
    });
  }

  toArray() {
    return Array.from(this.members);
  }
}
