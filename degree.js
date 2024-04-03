//input-degree      .bt-1  .bt-2  .bt-3
let $ = document;
const convertor = $.getElementById("input-degree");
const result = $.querySelector(".result");
const firstPoint = $.querySelector(".first-point");
const secondPoint = $.querySelector(".second-point");
const convertButton = $.querySelector(".bt-1");
const resetButton = $.querySelector(".bt-2");
const changeButton = $.querySelector(".bt-3");
let label = $.querySelector(".label-1");
function convert() {
  if (convertor.value === "") {
    //console.log("convert");
    result.innerHTML = "insert correct value!!!";
    result.style.display = "block";
    result.style.color = "red";
  } else {
    if (firstPoint.innerHTML === "℃") {
      let resultValue = convertor.value * 1.8 + 32;
      result.innerHTML =
        convertor.value + " ℃ " + "equal: " + resultValue + " ℉ ";
      result.style.display = "block";
      result.style.color = "green";
    } else {
      let resultValue = (convertor.value - 32) / 1.8;
      result.innerHTML =
        convertor.value + " ℉ " + "equal: " + resultValue.toFixed(2) + "℃";
      result.style.display = "block";
      result.style.color = "green";
    }
  }
}

function reset() {
  convertor.value = "";
  result.style.display = 'none'
}

function change() {
  if (label.innerHTML === "enter degree to return ℃ to ℉:") {
    label.innerHTML = "enter degree to return ℉ to ℃:";
    firstPoint.innerHTML = '℉';
    convertor.placeholder = '℉'
    $.title = 'deg ℉ To ℃';
  }else{
    label.innerHTML = "enter degree to return ℃ to ℉:";
    firstPoint.innerHTML = '℃';
    convertor.placeholder = '℃'
    $.title = 'deg ℃ To ℉';

  }
}
