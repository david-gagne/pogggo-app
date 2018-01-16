let yearly = document.querySelector("body > div.content > div.pricing__options > span.option__yearly");
let monthly = document.querySelector("body > div.content > div.pricing__options > span.option__monthly");
let clicks = 0;
let toggleSwitch = document.querySelector("body > div.content > div.pricing__options > span.toggle-switch > label");
let price1 = document.querySelector("#priceOne");
let price2 = document.querySelector("#priceTwo");
let price3 = document.querySelector("#priceThree");
let savings = document.querySelectorAll(".savings");

yearly.classList.toggle("inactive");

toggleSwitch.addEventListener("click", function(event) {
  clicks++
  console.log(clicks % 2);
  if (clicks % 2 === 1) {
    savings[0].classList.toggle("showSavings");
    savings[1].classList.toggle("showSavings");
    savings[2].classList.toggle("showSavings");
    yearly.classList.toggle("inactive");
    monthly.classList.toggle("inactive");
    price1.innerText = "$959.99";
    price2.innerText = "$2519.99";
    price3.innerText = "$4319.99";

  } else {
    savings[0].classList.toggle("showSavings");
    savings[1].classList.toggle("showSavings");
    savings[2].classList.toggle("showSavings");
    yearly.classList.toggle("inactive");
    monthly.classList.toggle("inactive");
    price1.innerText = "$99.99";
    price2.innerText = "$299.99";
    price3.innerText = "$599.99";
  }
});
