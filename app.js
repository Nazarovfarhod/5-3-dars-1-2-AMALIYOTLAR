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

const insert = document.getElementById("insert");

window.addEventListener("keydown", (e) => {
  insert.innerHTML = `
<div class="key" >
${e.key == " " ? "space" : e.key}
<small>event.key</small>
</div>
<div class="key" >
${e.which}
<small>event.keyCode</small>
</div>
<div class="key" >
${e.code}
<small>event.code</small>
</div>
  `;
});

/*_____________________2-AMALIYOT________________________ */
