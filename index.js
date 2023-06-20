function tiempoReloj(){
var fechaActual = new Date(); 
var horas = fechaActual.getHours();
var minutos = fechaActual.getMinutes();
var segundos = fechaActual.getSeconds();

var conexion = document.querySelector('#reloj');
var horaReloj = horas +" : "+ minutos+" : " + segundos;

conexion.innerHTML = horaReloj;}

setInterval(tiempoReloj, 1000);