"use strict";

document.addEventListener("DOMContentLoaded", init);
let i;
let i = 0;
let hiddenText;
let showText;
let speed;
let speedSet = 1000;
let keyRandom;
let input;

// Taking the sound form HTML
const sounds = document.querySelector(".sounds");
const typeKey1 = document.querySelector("#typekey1");
const typeKey2 = document.querySelector("#typekey2");
const typeSpace = document.querySelector("#typespace");
const typeLast = document.querySelector("#typelast");
const typeReturn = document.querySelector("#typereturn");

function init() {
  hiddenText = document.querySelector("#hiddenText").textContent;
  showText = document.querySelector("#typewriter").textContent;
  input = document.querySelector("#textinput").value;
  document.querySelector("#buttonStart").addEventListener("mousedown", startTyping);
}

function startTyping() {
  hiddenText = input;
  console.log(startTyping, i);
  if (i < hiddenText.length) {
    showText = showText + hiddenText[i];
    console.log("showText:", showText);
    setUpSpeed();
    document.querySelector("#typewriter").textContent = showText;
    playSound();
    i++;
    console.log(i);
    setTimeout(() => {
      startTyping();
    }, speedSet);
  } else {
    complete();
  }
}

function complete() {
  i = 0;
  showText = "";
  console.log(complete);
}

function playSound() {
  if (hiddenText.charAt(i) === " ") {
    console.log("Space");
    typeSpace.play();
  } else {
    console.log("KeyRandom:");
    keyRandom = Math.floor(Math.random() * 2) + 1;
    if (keyRandom == 1) {
      typeKey1.play();
    } else {
      typeKey2.play();
    }
  }
}

function setUpSpeed() {
  speed = Math.floor(Math.random() * 3) + 1;
  if (speed === 1) {
    speedSet = 750;
  } else if (speed === 2) {
    speedSet = 1050;
  } else if (speed === 2) {
    speedSet = 550;
  }
}
