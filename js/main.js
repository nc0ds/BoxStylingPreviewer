const sliderBorderRadius = document.querySelector("#sliderBorderRadius");
const resultadoBorderRadius = document.querySelector(".resultadoBorderRadius");
const sliderBoxShadowX = document.querySelector("#sliderBoxShadowX");
const sliderBoxShadowY = document.querySelector("#sliderBoxShadowY");
const sliderBoxShadowSpread = document.querySelector("#sliderBoxShadowSpread");
const sliderBoxShadowBlur = document.querySelector("#sliderBoxShadowBlur");
const resultadoBoxShadowX = document.querySelector(".resultadoBoxShadowX");
const resultadoBoxShadowY = document.querySelector(".resultadoBoxShadowY");
const resultadoBoxShadowSpread = document.querySelector(".resultadoBoxShadowSpread");
const resultadoBoxShadowBlur = document.querySelector(".resultadoBoxShadowBlur");
const sliderBorder = document.querySelector("#sliderBorder");
const resultadoBorder = document.querySelector(".resultadoBorder");
const borderSolid = document.querySelector("input[id=borderSolid]");
const borderDashed = document.querySelector("input[id=borderDashed]");
const borderDotted = document.querySelector("input[id=borderDotted]");
let borderType = "solid";
const preview = document.querySelector(".preview");

resultadoBorderRadius.innerHTML = sliderBorderRadius.value + "%";
preview.style.borderRadius = sliderBorderRadius.value + "%";
resultadoBoxShadowX.innerHTML = "X direction: " + sliderBoxShadowX.value + "px";
resultadoBoxShadowY.innerHTML = "Y direction: " + sliderBoxShadowY.value + "px";
resultadoBoxShadowSpread.innerHTML = "Spread amount: " + sliderBoxShadowSpread.value + "px";
resultadoBoxShadowBlur.innerHTML = "Blur amount: " + sliderBoxShadowBlur.value + "px";
resultadoBorder.innerHTML = sliderBorder.value + "px";
preview.style.border = sliderBorder.value + "px" + " " + borderType + " " + "black";

sliderBorderRadius.oninput = function() {
    resultadoBorderRadius.innerHTML = sliderBorderRadius.value + "%";
    preview.style.borderRadius = sliderBorderRadius.value + "%";
}

sliderBoxShadowX.oninput = function() {
    resultadoBoxShadowX.innerHTML = "X direction: " + sliderBoxShadowX.value + "px";
    preview.style.boxShadow = sliderBoxShadowX.value + "px " + sliderBoxShadowY.value + "px " + sliderBoxShadowBlur.value + "px " + sliderBoxShadowSpread.value + "px black";
}

sliderBoxShadowY.oninput = function() {
    resultadoBoxShadowY.innerHTML = "Y direction: " + sliderBoxShadowY.value + "px";
    preview.style.boxShadow = sliderBoxShadowX.value + "px " + sliderBoxShadowY.value + "px " + sliderBoxShadowBlur.value + "px " + sliderBoxShadowSpread.value + "px black";
}

sliderBoxShadowBlur.oninput = function() {
    resultadoBoxShadowBlur.innerHTML = "Blur amount: " + sliderBoxShadowBlur.value + "px";
    preview.style.boxShadow = sliderBoxShadowX.value + "px " + sliderBoxShadowY.value + "px " + sliderBoxShadowBlur.value + "px " + sliderBoxShadowSpread.value + "px black";
}

sliderBoxShadowSpread.oninput = function() {
    resultadoBoxShadowSpread.innerHTML = "Spread amount: " + sliderBoxShadowSpread.value + "px";
    preview.style.boxShadow = sliderBoxShadowX.value + "px " + sliderBoxShadowY.value + "px " + sliderBoxShadowBlur.value + "px " + sliderBoxShadowSpread.value + "px black";
}

sliderBorder.oninput = function() {
    resultadoBorder.innerHTML = sliderBorder.value + "px";
    preview.style.border = sliderBorder.value + "px" + " " + borderType + " " + "black";
}

borderSolid.onclick = function() {
    borderType = borderSolid.value;
    preview.style.border = sliderBorder.value + "px" + " " + borderType + " " + "black";
}

borderDashed.onclick = function() {
    borderType = borderDashed.value;
    preview.style.border = sliderBorder.value + "px" + " " + borderType + " " + "black";
}

borderDotted.onclick = function() {
    borderType = borderDotted.value;
    preview.style.border = sliderBorder.value + "px" + " " + borderType + " " + "black";
}