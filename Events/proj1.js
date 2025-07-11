// Random Color Generation

const randomColor = function () {
  const hex = "123456789ABCDEf";
  color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 15)];
  }
  return color;
};
// console.log(randomColor())

let changingBgc;
const startChangingColor = function () {
  const changeBgc = function () {
    document.body.style.backgroundColor = randomColor();
  };
  if (!changingBgc) {
    // if changingBgc is not null
    changingBgc = setInterval(changeBgc, 1000);
  }
};
const stopChangingColor = function () {
  clearInterval(changingBgc);
  changingBgc = null;
};
document.querySelector("#start").addEventListener("click", startChangingColor);
document.querySelector("#stop").addEventListener("click", stopChangingColor);
