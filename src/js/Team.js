import { generateTeam } from './generators';
import Swordsman from './characters/Swordsman';
import Bowman from './characters/Bowman';
import Magician from './characters/Magician';
import Undead from './characters/Undead';
import Vampire from './characters/Vampire';
import Daemon from './characters/Daemon';

export default class Team {
  constructor() {
    this.user = {
      type: 'user',
      allowedTypes: [Swordsman, Bowman, Magician],
      members: new Set(),
    };
    this.computer = {
      type: 'computer',
      allowedTypes: [Undead, Vampire, Daemon],
      members: new Set(),
    };
  }

  createTeam(player, level) {
    const characterCount = this.checkCharacterCount(player, level);
    const allowedTypes = this.checkAllowedTypes(player, level);
    const maxLevel = level;
    const result = generateTeam(allowedTypes, maxLevel, characterCount);
    console.log(result);
    player.members.addAll(...result);
    // player.members.toArray();
  }

  checkCharacterCount(player, level) {
    if (player.type === 'user' && level === 1) {
      return 2;
    } if (player.type === 'computer') {
      return this.user.members.length;
    }
    throw (new Error('Невозможно создать группу для этого игрока'));
  }

  checkAllowedTypes(player, level) {
    let end = level + 1;
    const playerAllowedTypes = player.allowedTypes;
    if (level > playerAllowedTypes.length) {
      end = playerAllowedTypes.length;
    }
    return playerAllowedTypes.slice(0, end);
  }
  

  add(member) {
    console.log('add');
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
    console.log('addAll');
    rest.forEach((member) => {
      this.members.add(member);
    });
  }

  toArray() {
    return Array.from(this.members);
  }
}
