const f1 = () => {
  console.log("F1");
};

const f2 = () => {
  console.log("F2");
};

const f3 = () => {
  console.log("F3");
};

function main() {
  console.log(" main");
  setTimeout(f1, 0);
  // setInterval(f1,1000);
  setImmediate(f2);
  process.nextTick(f3);
  console.log("end 🥰");
}
main();
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> d9737ee1628a04b77e3a21791ed47495e22058d2
=======
>>>>>>> 1efc4595aeb0074adcaa15257b28b5a1278b2dac
