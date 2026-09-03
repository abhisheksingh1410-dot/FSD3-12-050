import { EventEmitter } from "events";
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 1efc4595aeb0074adcaa15257b28b5a1278b2dac
const button = new EventEmitter();

button.on("click", () => {
  console.log("task 1");
});

button.emit("click", () => {
  console.log("task 2");
});

button.emit("click");
<<<<<<< HEAD
=======

const button=new EventEmitter();

button.on("click",()=>{
    console.log("Task1");
});

button.on("click",()=>{
    console.log("Task2");
});

button.emit("click");
>>>>>>> d9737ee1628a04b77e3a21791ed47495e22058d2
=======
>>>>>>> 1efc4595aeb0074adcaa15257b28b5a1278b2dac
