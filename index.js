const toggle = document.querySelector(".toggle");
const annually = document.querySelector(".annually");
const monthly = document.querySelector(".monthly");
const basicPrice = document.querySelector("#basic-price");
const profPrice = document.querySelector("#prof-price");
const masterPrice = document.querySelector("#master-price");

toggle.addEventListener("click", () => {
  if (annually.style.visibility === "visible") {
    annually.style.visibility = "hidden";
    monthly.style.visibility = "visible";
    basicPrice.innerText = "19.99";
    profPrice.innerText = "24.99";
    masterPrice.innerText = "39.99";
  } else {
    annually.style.visibility = "visible";
    monthly.style.visibility = "hidden";
    basicPrice.innerText = "199.99";
    profPrice.innerText = "249.99";
    masterPrice.innerText = "399.99";
  }
});
