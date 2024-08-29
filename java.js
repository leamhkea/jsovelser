const minSnaps = document.querySelector("#snaps");
const minFanta = document.querySelector("#fanta");
const minCola = document.querySelector("#cola");
const minØl = document.querySelector("#øl");

minSnaps.addEventListener("click", funktionDerKaldesVedKlik);

function funktionDerKaldesVedKlik() {
  console.log("du har klikket på knappen");

  if ("click" == Snaps) {
    console.log("indeholder alkohol");
  } else if ("click" == Fanta) {
    console.log("alkoholfri");
  } else if ("click" == Cola) {
    console.log("alkoholfri");
  } else {
    console.log("indeholder alkohol");
  }
}
