class User {
  name;

  constructor(name) {
    this.name = name;
  }

  read(str) {
    return `${this.name} is reading ${str}`;
  }
}
module.exports = User;
