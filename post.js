class Post {
  name;

  #number = 0;

  #suscribers = [];

  constructor(name) {
    this.name = name;
  }

  get summary() {
    return `${this.name} publication number ${this.#number}`;
  }

  getSubscribers() {
    return this.#suscribers.map((user) => user.name).join(',');
  }

  attach(user) {
    if (!this.#suscribers.includes(user)) {
      this.#suscribers.push(user);
    }
  }
}

module.exports = Post;
