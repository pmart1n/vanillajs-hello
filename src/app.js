/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector("#excuse").innerHTML = excuseGenerator();
};

let excuseGenerator = () => {
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];
  let whoIndex = Math.floor(Math.random() * who.length);
  let actionIndex = Math.floor(Math.random() * who.length);
  let whatIndex = Math.floor(Math.random() * who.length);
  let whenIndex = Math.floor(Math.random() * who.length);

  return (
    who[whoIndex] +  " " + action[actionIndex] + " " + what[whatIndex] + " " + when[whenIndex]
  );
};
