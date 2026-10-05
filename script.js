const musica = document.querySelector(".musica");
const ventana01 = document.querySelector("#vmusica");
const cerrar01 = ventana01.querySelector("button");
const barra1 = ventana01.querySelector(".barrat1");
const personal = document.querySelector(".personal");
const ventana02 = document.querySelector("#vpersonal");
const cerrar02 = ventana02.querySelector("button");
const barra2 = ventana02.querySelector(".barrat2");
const proyectos = document.querySelector(".proyectos");
const ventana03 = document.querySelector("#vproyectos");
const cerrar03 = ventana03.querySelector("button");
const barra3 = ventana03.querySelector(".barrat3");
const hobbies = document.querySelector(".hobbies");
const ventana04 = document.querySelector("#vhobbies");
const cerrar04 = ventana04.querySelector("button");
const barra4 = ventana04.querySelector(".barrat4");
let moviendo1 = false;
let offsetX1 = 0;
let offsetY1 = 0;
let moviendo2 = false;
let offsetX2 = 0;
let offsetY2 = 0;
let moviendo3 = false;
let offsetX3 = 0;
let offsetY3 = 0;
let moviendo4 = false;
let offsetX4 = 0;
let offsetY4 = 0;
musica.addEventListener("click", function() {
    ventana01.style.display = "block";
});
cerrar01.addEventListener("click", function() {
    ventana01.style.display = "none";
});
barra1.addEventListener("mousedown", function(event) {
    moviendo1 = true;
    const posicion1 = ventana01.getBoundingClientRect();
    offsetX1 = event.clientX - posicion1.left;
    offsetY1 = event.clientY - posicion1.top;
});
document.addEventListener("mousemove",function(event) {
    if(moviendo1) {
        ventana01.style.left = (event.clientX - offsetX1) + "px";
        ventana01.style.top = (event.clientY - offsetY1) + "px";
    }
});
document.addEventListener("mouseup", function() {
    moviendo1 = false;
});
personal.addEventListener("click", function() {
    ventana02.style.display = "block";
});
cerrar02.addEventListener("click", function() {
    ventana02.style.display = "none";
});
barra2.addEventListener("mousedown", function(event) {
    moviendo2 = true;
    const posicion2 = ventana02.getBoundingClientRect();
    offsetX2 = event.clientX - posicion2.left;
    offsetY2 = event.clientY - posicion2.top;
});
document.addEventListener("mousemove", function(event) {
    if(moviendo2) {
        ventana02.style.left = (event.clientX - offsetX2) + "px";
        ventana02.style.top = (event.clientY -offsetY2) + "px";
    }
});
document.addEventListener("mouseup", function() {
    moviendo2 = false;
});
proyectos.addEventListener("click", function() {
    ventana03.style.display = "block";
});
cerrar03.addEventListener("click", function() {
    ventana03.style.display = "none";
});
barra3.addEventListener("mousedown", function(event) {
    moviendo3 = true;
    const posicion3 = ventana03.getBoundingClientRect();
    offsetX3 = event.clientX - posicion3.left;
    offsetY3 = event.clientY - posicion3.top;
});
document.addEventListener("mousemove", function(event) {
    if(moviendo3) {
        ventana03.style.left = (event.clientX - offsetX3) + "px";
        ventana03.style.top = (event.clientY - offsetY3) + "px";
    }
});
document.addEventListener("mouseup", function() {
    moviendo3 = false;
});
hobbies.addEventListener("click", function() {
    ventana04.style.display = "block";
});
cerrar04.addEventListener("click", function() {
    ventana04.style.display = "none";
});
barra4.addEventListener("mousedown", function(event) {
    moviendo4 = true;
    const posicion4 = ventana04.getBoundingClientRect();
    offsetX4 = event.clientX - posicion4.left;
    offsetY4 = event.clientY - posicion4.top;
});
document.addEventListener("mousemove", function(event) {
    if(moviendo4) {
        ventana04.style.left = (event.clientX - offsetX4) + "px";
        ventana04.style.top = (event.clientY - offsetY4) + "px";
    }
});
document.addEventListener("mouseup",  function() {
    moviendo4 = false;
});