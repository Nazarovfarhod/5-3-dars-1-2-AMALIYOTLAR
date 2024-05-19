// const colors = ["#A67B5B", "#240750", "#151515", "6DC5D1", "#C40C0C"];
// const items = document.getElementsByTagName("li");

// let numbers = [0, 1, 2, 3, 4];

// for (let i = 0; i < colors.length; i++) {
//   const randomNumber = numbers[Math.floor(Math.random() * numbers.length)];
//   items[i].style.color = colors[randomNumber];
//   items[i].textContent += " = " + colors[randomNumber];
//   numbers = numbers.filter((num) => num != randomNumber);
// }

/*_____________________1-AMALIYOT________________________ */

// const insert = document.getElementById("insert");

// window.addEventListener("keydown", (e) => {
//   insert.innerHTML = `
// <div class="key" >
// ${e.key == " " ? "space" : e.key}
// <small>event.key</small>
// </div>
// <div class="key" >
// ${e.which}
// <small>event.keyCode</small>
// </div>
// <div class="key" >
// ${e.code}
// <small>event.code</small>
// </div>
//   `;
// });

/*_____________________2-AMALIYOT________________________ */

const body = document.querySelector("body");
const container = document.querySelector(".container");
const colorText = document.querySelector(".color-text");

const value = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
];
// random color function

function getGradient() {
  let color = "#";
  for (let i = 1; i <= 6; i++) {
    const randomNumber = Math.trunc(Math.random() * value.length);
    color += value[randomNumber];
  }
  return color;
}

// set color to body

function setGradient() {
  const color1 = getGradient();
  const color2 = getGradient();
  const randomDeg = Math.floor(Math.random() * 360);
  const bgColor = `linear-gradient(
    ${randomDeg}deg,
    ${color1},
    ${color2}
  )`;
  body.style.background = bgColor;
  colorText.textContent = bgColor;
}

setGradient();

container.addEventListener("click", setGradient);
