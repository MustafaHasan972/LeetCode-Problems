class MyHashMap {
  constructor() {
    this.data = new Array(1000001);
  }
  put(key, value) {
    this.data[key] = value;
  }
  get(key) {
    let value = this.data[key];
    return value !== undefined ? value : -1;
  }
  remove(key) {
    delete this.data[key];
  }
}
