export default {
  store: [],
  add: function (newObj) {
    this.store.push(newObj);
  },
  remove: function (objToRemove) {
    this.store = this.store.filter((obj) => objToRemove != obj);
  },
  get store() {
    return this.store;
  }
};
