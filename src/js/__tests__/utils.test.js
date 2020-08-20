import { calcTileType } from '../utils';

test('Если размер поля boardSize = 5, то у ячейки 3 должна быть строка top', () => {
  const result = calcTileType(3, 5);
  expect(result).toEqual('top');
});
test('Если размер поля boardSize = 5, то у ячейки 23 должна быть строка bottom', () => {
  const result = calcTileType(23, 5);
  expect(result).toEqual('bottom');
});
test('Если размер поля boardSize = 5, то у ячейки 9 должна быть строка right', () => {
  const result = calcTileType(9, 5);
  expect(result).toEqual('right');
});
test('Если размер поля boardSize = 5, то у ячейки 5 должна быть строка left', () => {
  const result = calcTileType(5, 5);
  expect(result).toEqual('left');
});
test('Если размер поля boardSize = 5, то у ячейки 12 должна быть строка center', () => {
  const result = calcTileType(12, 5);
  expect(result).toEqual('center');
});
test('Если размер поля boardSize = 5, то у ячейки 4 должна быть строка top-right', () => {
  const result = calcTileType(4, 5);
  expect(result).toEqual('top-right');
});
test('Если размер поля boardSize = 5, то у ячейки 0 должна быть строка top-left', () => {
  const result = calcTileType(0, 5);
  expect(result).toEqual('top-left');
});
test('Если размер поля boardSize = 5, то у ячейки 24 должна быть строка bottom-right', () => {
  const result = calcTileType(24, 5);
  expect(result).toEqual('bottom-right');
});
test('Если размер поля boardSize = 5, то у ячейки 20 должна быть строка bottom-left', () => {
  const result = calcTileType(20, 5);
  expect(result).toEqual('bottom-left');
});
test('Если размер поля boardSize = 8, то у ячейки 3 должна быть строка top', () => {
  const result = calcTileType(3, 8);
  expect(result).toEqual('top');
});
test('Если размер поля boardSize = 8, то у ячейки 57 должна быть строка bottom', () => {
  const result = calcTileType(57, 8);
  expect(result).toEqual('bottom');
});
test('Если размер поля boardSize = 8, то у ячейки 39 должна быть строка right', () => {
  const result = calcTileType(39, 8);
  expect(result).toEqual('right');
});
test('Если размер поля boardSize = 8, то у ячейки 24 должна быть строка left', () => {
  const result = calcTileType(24, 8);
  expect(result).toEqual('left');
});
test('Если размер поля boardSize = 8, то у ячейки 35 должна быть строка center', () => {
  const result = calcTileType(35, 8);
  expect(result).toEqual('center');
});
test('Если размер поля boardSize = 8, то у ячейки 7 должна быть строка top-right', () => {
  const result = calcTileType(7, 8);
  expect(result).toEqual('top-right');
});
test('Если размер поля boardSize = 8, то у ячейки 63 должна быть строка bottom-right', () => {
  const result = calcTileType(63, 8);
  expect(result).toEqual('bottom-right');
});
test('Если размер поля boardSize = 8, то у ячейки 56 должна быть строка bottom-left', () => {
  const result = calcTileType(56, 8);
  expect(result).toEqual('bottom-left');
});
test('Если размер поля boardSize = 10, то у ячейки 3 должна быть строка top', () => {
  const result = calcTileType(3, 10);
  expect(result).toEqual('top');
});
test('Если размер поля boardSize = 10, то у ячейки 95 должна быть строка bottom', () => {
  const result = calcTileType(95, 10);
  expect(result).toEqual('bottom');
});
test('Если размер поля boardSize = 10, то у ячейки 39 должна быть строка right', () => {
  const result = calcTileType(39, 10);
  expect(result).toEqual('right');
});
test('Если размер поля boardSize = 10, то у ячейки 20 должна быть строка left', () => {
  const result = calcTileType(20, 10);
  expect(result).toEqual('left');
});
test('Если размер поля boardSize = 10, то у ячейки 12 должна быть строка center', () => {
  const result = calcTileType(12, 10);
  expect(result).toEqual('center');
});
test('Если размер поля boardSize = 10, то у ячейки 9 должна быть строка top-right', () => {
  const result = calcTileType(9, 10);
  expect(result).toEqual('top-right');
});
test('Если размер поля boardSize = 10, то у ячейки 99 должна быть строка bottom-right', () => {
  const result = calcTileType(99, 10);
  expect(result).toEqual('bottom-right');
});
test('Если размер поля boardSize = 10, то у ячейки 90 должна быть строка bottom-left', () => {
  const result = calcTileType(90, 10);
  expect(result).toEqual('bottom-left');
});
