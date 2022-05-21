/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector(".card").classList.add(generateRandomSuit());
  document.querySelector(".number").innerHTML = generateRandomNumber();
};
let generateRandomNumber = () => {
  let cardNumber = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K"];
  let randomIndexNumber = Math.floor(Math.random() * cardNumber.length);

  return cardNumber[randomIndexNumber];
};
let generateRandomSuit = () => {
  let cardSuit = ["diamond", "spade", "heart", "club"];
  let randomIndexSuit = Math.floor(Math.random() * cardSuit.length);

  return cardSuit[randomIndexSuit];
};
