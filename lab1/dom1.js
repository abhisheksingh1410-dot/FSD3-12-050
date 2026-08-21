<<<<<<< HEAD
//document object model
import{ EventEmitter } from "events";
const button = new EventEmitter();

button.on("click", () => {
    console.log("button clicked");
});

button.emit("click");
=======
//DOM:Document Object Model
import{ EventEmitter } from "events";

const button = new EventEmitter();

button.on("click", () => {
    console.log("Button Clicked");
});

button.emit("click");
>>>>>>> d9737ee1628a04b77e3a21791ed47495e22058d2
