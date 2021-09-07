const items = require("./fakeDb");

class Item {
  constructor(name, price) {
    this.name = name;
    this.price = price;

    items.push(this);
  }

  static findAll() {
    return items;
  }

  static update(name, data) {
    foundItem = Item.find(name);
    if (foundItem === undefined) {
      throw { message: "Not Found", status: 404 };
    }
    foundItem.name = name;
    foundItem.price = price;

    return foundItem;
  }
  static find(name) {
    foundItem = Item.find((v) => v.name === name);
    if (foundItem === undefined) {
      throw { message: "Not Found", status: 404 };
    }
    return foundItem;
  }

  static delete(name) {
    foundItemIdx = Item.findIndex((v) => v.name === name);
    if (foundItemIdx === -1) {
      throw { message: "Not Found", status: 404 };
    }
    items.splice(foundItemIdx, 1);
  }
}

module.exports = Item;
