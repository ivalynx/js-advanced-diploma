import themes from './themes';
import Team from './Team';
import commonDataGame from './commonDataGame';
import checkPossiblePositions from './checkPossiblePositions';

export default class GameController {
  constructor(gamePlay, stateService) {
    this.gamePlay = gamePlay;
    this.stateService = stateService;
    this.level = 0;    
    this.possiblePositions = checkPossiblePositions();
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
    const userTeam = new Team(commonDataGame.firstPlayer.type, commonDataGame.firstPlayer.allowedTypes);
    const computerTeam = new Team(commonDataGame.secondPlayer.type, commonDataGame.secondPlayer.allowedTypes);
    userTeam.possiblePositions = this.possiblePositions.firstPlayer;
    computerTeam.possiblePositions = this.possiblePositions.secondPlayer;
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
