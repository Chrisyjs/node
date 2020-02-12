// exports.a = 1;

/* module.exports = {
  a: 1
} */

module.exports = class {
  constructor(name) {
    this.name = name;
  }
  show() {
    console.log(this.name);
  }
}