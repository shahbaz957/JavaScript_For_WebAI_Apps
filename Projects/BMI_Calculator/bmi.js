const form = document.querySelector("form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const height = parseInt(form.querySelector("#height").value);
  const weight = parseInt(form.querySelector("#weight").value);
  const result = form.querySelector("#result");
  const guide = form.querySelector("#bmi-guide");
  if (height < 0 || isNaN(height) || height === "") {
    result.innerHTML = "Please Enter Valid Height";
  } else if (weight < 0 || isNaN(weight) || weight === "") {
    result.innerHTML = "Please Enter Valid Weight";
  } else {
    const bmi = (weight / ((height * height) / 1000)).toFixed(2);
    result.innerHTML = `<h1>${bmi}</h1>`;
    if (bmi < 18.6) {
      guide.innerHTML = "You are Under-Weight";
    } else if (bmi > 18.6 && bmi < 24.9) {
      guide.innerHTML = "You are in Normal Range";
    } else if (bmi > 24.9) {
      guide.innerHTML = "You are overweight";
    }
  }
});
