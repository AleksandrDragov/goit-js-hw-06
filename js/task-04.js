/** @format */
const counter = document.querySelector("#counter");
const counterValue = document.querySelector("#value");
let count = 0;
const incrementBtn = counter.querySelector('[data-action="increment"]');
const decrementBtn = counter.querySelector('[data-action="decrement"]');
incrementBtn.addEventListener("click", increment);
decrementBtn.addEventListener("click", decrement);
function increment() {
  count += 1;
  updateValue();
}
function decrement() {
  count -= 1;
  updateValue();
}
function updateValue() {
  counterValue.textContent = count;
}
