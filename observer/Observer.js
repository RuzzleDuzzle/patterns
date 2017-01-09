
export class Observer {
  constructor(subject) {
    this.subject = subject;
    subject.registerObserver(this);
  }

  update(options) {}
}