export default {
  store: [
    {
      imageUrl: "foobar",
      dateFound: "01-29-1093",
      description: "some description text",
    },
  ],
  add: function (newObj) {
    this.store.push(newObj);
  },
  remove: function (objToRemove) {
    this.store = this.store.filter((obj) => objToRemove != obj);
  },
  get data() {
    return this.store;
  },
};
