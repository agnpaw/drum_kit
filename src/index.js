let keyPress;

let soundsArray = [clap, hihat, kick, openhat, boom, ride, snare, tom, tink];

let numberOfButtons = document.querySelectorAll(".drum").length;
for (let i = 0; i < numberOfButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    let sound = new Audio(soundsArray[i]);
    sound.play();
  });
}

document.addEventListener("keydown", function (event) {
  keyPress = event.key;
  console.log(event.key);
});

document.addEventListener("keydown", function (event) {
  switch (event.key) {
    case "w":
      buttonAnimation(keyPress);
      let sound_w = new Audio(soundsArray[0]);
      sound_w.play();
      break;
    case "s":
      buttonAnimation(keyPress);
      let sound_s = new Audio(soundsArray[1]);
      sound_s.play();
      break;
    case "d":
      buttonAnimation(keyPress);
      let sound_d = new Audio(soundsArray[2]);
      sound_d.play();
      break;
    case "f":
      buttonAnimation(keyPress);
      let sound_f = new Audio(soundsArray[3]);
      sound_f.play();
      break;
    case "g":
      buttonAnimation(keyPress);
      let sound_g = new Audio(soundsArray[4]);
      sound_g.play();
      break;
    case "h":
      buttonAnimation(keyPress);
      let sound_h = new Audio(soundsArray[5]);
      sound_h.play();
      break;
    case "j":
      buttonAnimation(keyPress);
      let sound_j = new Audio(soundsArray[6]);
      sound_j.play();
    case "k":
      buttonAnimation(keyPress);
      let sound_k = new Audio(soundsArray[7]);
      sound_k.play();
    case "l":
      buttonAnimation(keyPress);
      let sound_l = new Audio(soundsArray[8]);
      sound_l.play();
      break;
    default:
      console.log("This button doesn't work");
  }
});

function buttonAnimation(keyPress) {
  document.querySelector("." + keyPress).classList.add("buttonClicked");
  setTimeout(function () {
    document.querySelector("." + keyPress).classList.remove("buttonClicked");
  }, 200);
}

import style from "./css/index.css";

import boom from "./sounds/boom.wav";
import clap from "./sounds/clap.wav";
import hihat from "./sounds/hihat.wav";
import kick from "./sounds/kick.wav";
import openhat from "./sounds/openhat.wav";
import ride from "./sounds/ride.wav";
import snare from "./sounds/snare.wav";
import tink from "./sounds/tink.wav";
import tom from "./sounds/tom.wav";
