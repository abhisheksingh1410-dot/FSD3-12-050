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
