<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 1efc4595aeb0074adcaa15257b28b5a1278b2dac
import { EventEmitter } from "events";

const form = new EventEmitter();
form.on("submit", (uname,password) => {
    console.log(" form submitted");
    console.log(`username: ${uname}`);
    console.log(`password: ${password}`);
});
form.emit("submit", "Alice","12345");
form.emit("submit", "Bob","54321");
form.emit("submit", "Charlie","98765");
<<<<<<< HEAD
=======
import {EventEmitter} from 'events';

const form = new EventEmitter();

form.on("submit",(uname,password)=>{
    console.log('form submitted');
    console.log(`user name: ${uname}`);
    console.log(`user password: ${password}`);
});

form.emit("submit","abc@abc.com","11223322");

>>>>>>> d9737ee1628a04b77e3a21791ed47495e22058d2
=======
>>>>>>> 1efc4595aeb0074adcaa15257b28b5a1278b2dac
