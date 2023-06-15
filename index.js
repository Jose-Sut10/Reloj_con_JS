var fechaActual = new Date(); 
var horas = fechaActual.getHours();
var minutos = fechaActual.getMinutes();
var segundos = fechaActual.getSeconds();

console.log(fechaActual); 
console.log(horas); 
console.log(minutos); 
console.log(segundos); 

var conexion = document.querySelector('#reloj');
var horaReloj = horas +" : "+ minutos+" : " + segundos;

conexion.innerHTML = horaReloj;