/* eslint-disable */

import "file-loader?name=[name].[ext]!../index.html";
import "../assets/img/rigo-baby.jpg";
import "../assets/img/4geeks.ico";
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";

window.onload = () => {
  let top = document.querySelector("#topSuit");
  let bottom = document.querySelector("#bottomSuit");
  let number = document.querySelector("#cardNumber");
  let value = getValue();
  let suit = getSuit();

  top.classList.add(suit);
  bottom.classList.add(suit);
  number.innerHTML = value;
};

let suits = ["heart", "spade", "diamond", "club"];
let values = [2, 3, 4, 5, 6, 7, 8, 9, "J", "Q", "K", "A"];

function getSuit() {
  var theSuite = suits[Math.floor(Math.random() * suits.length)];
  return theSuite;
}

function getValue() {
  var theValue = values[Math.floor(Math.random() * values.length)];
  return theValue;
}

/*setTimeout(function() {
  location.reload();
}, 5000);*/
