export default class GameStateService {
  constructor(storage) {
    this.storage = storage;
  }

  // объект, который взаимодействует с текущим состоянием (сохраняет его, чтобы не оно не потерялось при перезагрузке страницы, может экспортировать в файл или загрузить из файла)
  save(state) {
    this.storage.setItem('state', JSON.stringify(state));
  }

  load() {
    try {
      return JSON.parse(this.storage.getItem('state'));
    } catch (e) {
      throw new Error('Invalid state');
    }
  }
}
