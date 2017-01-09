

export class Subject {

  constructor() {
    this.observerList = [];
  }

  registerObserver(obs) {
    this.observerList.push(obs);
  }

  unregisterObserver(obs) {
    this.observerList = this.observerList.filter((item) => { if (obs !== item) return item; });
  }

  notify(options) {
    this.observerList.forEach(item => item.update(options));
  }
}