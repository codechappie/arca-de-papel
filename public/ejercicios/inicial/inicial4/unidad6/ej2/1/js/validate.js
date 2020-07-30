//INICIO PLANTILLA - PLANTILLA - PLANTILLA
dataExercise = {
  next: "../../../index.html", // Siguiente ejercicio
  procesar:"result_tipo_4_3_2()", //tal cual esta en la funcion result_tipo_x_x_x() de la parte inferior del archivo index o el archivo validate
  // El titulo tal cual esta en la carpetade paginacion  ejemplo Comunicacion/1/0/1/pagination.php
  titulo:"<center><h5><span>Observa</span> las figuras, luego <span>arrastra</span> cada figura al recuadro correspondiente.</h5></center>",
} 
document.getElementById("ftitle").innerHTML = dataExercise.titulo;
document.getElementById("boton1").setAttribute("onclick", dataExercise.procesar);
document.getElementById("nextExercise").setAttribute("href", dataExercise.next);
// FIN PLANTILLA - PLANTILLA - PLANTILLA

var r = 0;

var clases = ".contenedor-imagen";
listar_random(clases);

arrastre();



function result_tipo_4_3_2() {
  var min = $('#Minutos').text();
  var seg = $('#Segundos').text();
  var milseg = $('#Centesimas').text();
  var tiempo = min + ":" + seg + ":" + milseg;

  if (r == 4) {
      
      correcto();
  } else {
      incorrecto();
      
  }

}
//COPIAR DEL EJERCICIO del index.html o DEL ARCHIVO validate.js 
//COPIAR DEL EJERCICIO del index.html o DEL ARCHIVO validate.js 








//COPIAR DEL EJERCICIO del index.html o DEL ARCHIVO validate.js 
//COPIAR DEL EJERCICIO del index.html o DEL ARCHIVO validate.js 
