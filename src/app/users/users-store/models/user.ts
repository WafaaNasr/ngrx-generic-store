export class UserEntity {
  completed: boolean;
  id: string;
  title: string;

  constructor(title: string) {
    this.title = title;
    this.completed = false;
  }
}
