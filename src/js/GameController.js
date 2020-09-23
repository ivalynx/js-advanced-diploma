import themes from './themes';
import Team from './Team';
import commonDataGame from './commonDataGame';
import checkPossiblePositions from './checkPossiblePositions';
import PositionedCharacter from './PositionedCharacter';

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
      console.log('Давайте поиграем');
      this.level = 1;
    } else {
    // TODO: load saved stated from stateService
      console.log('Посмотрим, что у вас тут было');
      this.level = 1;
    }
    this.gamePlay.drawUi(themes[this.level - 1]);
    this.startNewGame();
    // TODO: add event listeners to gamePlay events
  }

  startNewGame() {
    const { firstPlayer } = commonDataGame;
    const { secondPlayer } = commonDataGame;
    const userTeam = new Team(firstPlayer.type, firstPlayer.allowedTypes);
    const computerTeam = new Team(secondPlayer.type, secondPlayer.allowedTypes);
    userTeam.possiblePositions = this.possiblePositions.firstPlayer;
    computerTeam.possiblePositions = this.possiblePositions.secondPlayer;

    userTeam.createTeam(this.level);
    computerTeam.createTeam(this.level, userTeam);
    this.placeFiguresOnTheBoard(userTeam, computerTeam);
  }

  placeFiguresOnTheBoard(userTeam, computerTeam) {
    const userTeamCharacters = userTeam.toArray();
    const computerTeamCharacters = computerTeam.toArray();
    const positions = [];
    for (let i = 0; i < userTeamCharacters[0].length; i += 1) {
      const character = userTeamCharacters[0][i];
      const { position } = userTeamCharacters[0][i];
      positions.push(new PositionedCharacter(character, position));
    }
    for (let i = 0; i < computerTeamCharacters[0].length; i += 1) {
      const character = computerTeamCharacters[0][i];
      const { position } = computerTeamCharacters[0][i];
      positions.push(new PositionedCharacter(character, position));
    }
    this.gamePlay.redrawPositions(positions);
  }

  // onCellClick(index) {
  //   // TODO: react to click
  // }

  // onCellEnter(index) {
  //   // TODO: react to mouse enter
  // }

  // onCellLeave(index) {
  //   // TODO: react to mouse leave
  // }
}
