const EventEmitter = require("events");

class Person extends EventEmitter {
  constructor(name) {
    super();
    this.name = name;
  }
}

let gintu = new Person("gintu");

gintu.on("name", () => {
  console.log("my name is " + gintu.name);
});

gintu.emit("name");
