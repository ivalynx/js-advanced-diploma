import themes from './themes';
import Team from './Team';
import commonDataGame from './commonDataGame';
import checkPossiblePositions from './checkPossiblePositions';

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
    const possiblePositions = checkPossiblePositions();
    const userTeam = new Team(commonDataGame.players[0].type, commonDataGame.players[0].allowedTypes);
    const computerTeam = new Team(commonDataGame.players[1].type, commonDataGame.players[1].allowedTypes);
    userTeam.possiblePositions = possiblePositions.user;
    computerTeam.possiblePositions = possiblePositions.computer;
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
