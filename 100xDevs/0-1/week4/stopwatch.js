let a = 0;
let b = 0;

function updateValue() {
  setInterval(() => {
    a += 1;
    document.querySelectorAll("h1")[1].innerHTML = a % 60;
  }, 1000);
  setInterval(() => {
    b++;
    document.querySelector("h1").innerHTML = b;
  }, 60000);
}
