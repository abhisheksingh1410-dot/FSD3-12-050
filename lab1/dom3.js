import { EventEmitter } from "events";
<<<<<<< HEAD
const button = new EventEmitter();
button.on("click", (uname) => {
  console.log(`button clicked by ${uname}`);
});
button.emit("click", "Alice");
button.emit("click", "Bob");
button.emit("click", "Charlie");
=======

const button = new EventEmitter();

button.on("click",(uname)=>{
    console.log(`button clicked by ${uname}`);
});

button.emit("click","Raju");
button.emit("click", "Kaju");
button.emit("click", "Rani");
>>>>>>> d9737ee1628a04b77e3a21791ed47495e22058d2
button.emit("click");
