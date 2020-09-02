import themes from './themes';
import Team from './Team';
import { generateTeam } from './generators';

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
    const team = new Team();
    team.createTeam(team.user, this.level);
    team.createTeam(team.computer, this.level);
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
