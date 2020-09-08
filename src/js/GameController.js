import themes from './themes';
import Team from './Team';
import Swordsman from './characters/Swordsman';
import Bowman from './characters/Bowman';
import Magician from './characters/Magician';
import Undead from './characters/Undead';
import Vampire from './characters/Vampire';
import Daemon from './characters/Daemon';

export default class GameController {
  constructor(gamePlay, stateService) {
    this.gamePlay = gamePlay;
    this.stateService = stateService;
    this.level = 0;
  }

  init() {
    const { storage } = this.stateService;
    if (storage.length === 1) {
      this.level = 1;
      console.log('Давайте поиграем');
      this.startNewGame();
    } else {
    // TODO: load saved stated from stateService
      console.log('Посмотрим, что у вас тут было');
    }
    this.gamePlay.drawUi(themes[this.level - 1]);
    // TODO: add event listeners to gamePlay events
  }

  startNewGame() {
    const userTeam = new Team('user', [Swordsman, Bowman, Magician]);
    const computerTeam = new Team('computer', [Undead, Vampire, Daemon]);
    userTeam.createTeam(this.level);
    computerTeam.createTeam(this.level, userTeam);
    console.log(userTeam);
    console.log(computerTeam);
  }

  onCellClick(index) {
    // TODO: react to click
  }

  onCellEnter(index) {
    // TODO: react to mouse enter
  }

  onCellLeave(index) {
    // TODO: react to mouse leave
  }
}
