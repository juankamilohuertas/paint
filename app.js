"use strict";

const canvas = document.getElementById("canvas");
const grosorLinea = document.getElementById("rango");
const colorLinea = document.getElementById("color");

const contexto = canvas.getContext("2d");

/* funcion herramientas */
const herramientas = () => {
  contexto.lineWidth = grosorLinea.value;
  contexto.strokeStyle = colorLinea.value;
};

/* funcion de pintar */
const pintar = (e) => {
  let x = e.offsetX;
  let y = e.offsetY;
  contexto.lineTo(x, y);
  contexto.stroke();
};

canvas.addEventListener("mousedown", () => {
  herramientas();
  canvas.addEventListener("mousemove", pintar);
  canvas.addEventListener("mouseup", () => {
    canvas.removeEventListener("mousemove", pintar);
    contexto.closePath();
    contexto.beginPath();
  });
});
