let counter = document.getElementById("counter");
let counterNumber = 0;
let banana = document.getElementById("banana");

banana.addEventListener("mousedown", counterAdd);

document.oncontextmenu = document.body.oncontextmenu = function () {
  return false;
};

function counterAdd() {
  counterNumber += 1;
  counter.innerHTML = counterNumber;
  console.log(counterNumber);
}
