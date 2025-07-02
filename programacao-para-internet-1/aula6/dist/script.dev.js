"use strict";

/*Ao clicar em um elemento do menu, o conteudo da area
central sera alterado*/

/**
 * 1)Selecionar o elemento que vai disparar a ação ou evento
*/
document.getElementById("home").onclick = function () {
  document.getElementById("content").innerHTML = "home";
};

document.getElementById("contato").onclick = function () {
  document.getElementById("content").innerHTML = "contato";
};

document.getElementById("cursos").onclick = function () {
  document.getElementById("content").innerHTML = "cursos";
};

document.getElementById("comercial").onclick = function () {
  document.getElementById("content").innerHTML = "comercial";
};

document.getElementById("home").onmouseover = function () {
  document.getElementById("home").style.textDecoration = "underline";
};

document.getElementById("home").onmouseleave = function () {
  document.getElementById("home").style.textDecoration
  /*this*/
  = "none";
};