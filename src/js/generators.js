/**
 * Generates random characters
 *
 * @param allowedTypes iterable of classes
 * @param maxLevel max character level
 * @returns Character type children (ex. Magician, Bowman, etc)
 */

export function* characterGenerator(allowedTypes, maxLevel) {
  while (true) {
    const randomLevel = Math.floor(Math.random() * maxLevel) + 1;
    const RandomType = allowedTypes[Math.floor(Math.random() * allowedTypes.length)];
    yield new RandomType(randomLevel);
  }
}

export function generateTeam(allowedTypes, maxLevel, characterCount, possiblePositions) {
  const team = [];
  const charactersPosition = []
  for (let i = 0; i < characterCount; i += 1) {
    const character = characterGenerator(allowedTypes, maxLevel).next().value;
    character.position = generatorPosition(possiblePositions, charactersPosition);
    team.push(character);
    charactersPosition.push(character.position);
  }
  return team;
}

function generatorPosition(possiblePositions, charactersPosition) {
  console.log(possiblePositions);
  console.log(charactersPosition);
  let position = possiblePositions[Math.floor(Math.random())];
  if(charactersPosition.includes(position)) {
    generatorPosition(possiblePositions, charactersPosition);
  };
  return position;
};