import { EventEmitter } from "events";
const button = new EventEmitter();
button.on("click", (uname) => {
  console.log(`button clicked by ${uname}`);
});
button.emit("click", "Alice");
button.emit("click", "Bob");
button.emit("click", "Charlie");
button.emit("click");
