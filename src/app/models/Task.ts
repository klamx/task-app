export class Task {
  name: string;
  state: boolean;
  static id: number = 0;
  id: number;

  constructor(name: string, state: boolean = false, id: number = Task.id++) {
    this.name = name;
    this.state = state;
    this.id = id;
  }
}
