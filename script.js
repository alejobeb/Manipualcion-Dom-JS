const h1 = document.querySelector("h1");
const form = document.querySelector("#form");
const input1 = document.querySelector("#calculo1");
const input2 = document.querySelector("#calculo2");
const btn = document.querySelector("#btnCalcular");
const pResult = document.querySelector("#result");

// form.addEventListener("submit", sumarImputValues);

// function sumarImputValues(event) {
//   event.preventDefault();
//   const sumaImputs = parseInt(input1.value) + parseInt(input2.value);
//   pResult.innerText = "Resultado: " + sumaImputs;
// }

form.addEventListener("click", sumarImputValues);

function sumarImputValues(event) {
  // event.preventDefault();
  const sumaImputs = parseInt(input1.value) + parseInt(input2.value);
  pResult.innerText = "Resultado: " + sumaImputs;
}

document.addEventListener("click", cambiarColorFondo);

function cambiarColorFondo(color) {
  // event.preventDefault();
  document.body.style.backgroundColor = "red";
  pResult.innerText = "Resultado: " + sumaImputs;
}
