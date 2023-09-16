/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
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

  // Aqui les estoy asignando la una excusa random usando Math.random y el index de cada array

  let whoR = who[Math.floor(Math.random() * who.length)];
  let actionR = action[Math.floor(Math.random() * action.length)];
  let whatR = what[Math.floor(Math.random() * what.length)];
  let whenR = when[Math.floor(Math.random() * when.length)];

  // Aqui estoy concatenando las partes para formar excusa final.

  const excusa = `${whoR} ${actionR} ${whatR} ${whenR}`;

  // aqui estoy llamando al tag h1 que seria la excusa mediante el selector de id y lo asigno a la variable con nombre h1

  let h1 = document.getElementById("excuse");

  //Aqui estoy asignandole la excusa generada de manera aleatoria al h1 que llame con el selector de Id
  h1.innerText = excusa;

  // Aqui estoy  llamando al boton de mi HTML con el selector de Id y lo asigno a la variable boton
  let boton = document.getElementById("bExcuse");

  //Aqui le estoy añadiendo una escucha para que cuando haga click en el boton la pagina se refresque y genere una nueva excusa
  boton.addEventListener("click", _ => {
    location.reload();
  });
};
