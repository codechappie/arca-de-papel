//INICIO PLANTILLA - PLANTILLA - PLANTILLA
dataExercise = {
  next: "../../../index.html", // Siguiente ejercicio
  procesar:"result_tipo_5_3_6()", //tal cual esta en la funcion result_tipo_x_x_x() de la parte inferior del archivo index o el archivo validate
  // El titulo tal cual esta en la carpetade paginacion  ejemplo Comunicacion/1/0/1/pagination.php
  titulo:" <center><h5><span>Observa</span> los conjuntos y <span>arrastra</span> la representación correcta.</h5></center>",
} 
document.getElementById("ftitle").innerHTML = dataExercise.titulo;
document.getElementById("boton1").setAttribute("onclick", dataExercise.procesar);
document.getElementById("nextExercise").setAttribute("href", dataExercise.next);
// FIN PLANTILLA - PLANTILLA - PLANTILLA




var r = 0;
arrastre();


listar_random(".aleatorio");

function result_tipo_5_3_5() {
  var min = $('#Minutos').text();
  var seg = $('#Segundos').text();
  var milseg = $('#Centesimas').text();
  var tiempo = min + ":" + seg + ":" + milseg;


  if (r == 3) {
      
      correcto();
  } else {
       
      incorrecto();
       
  }

}        




//COPIAR DEL EJERCICIO del index.html o DEL ARCHIVO validate.js 
//COPIAR DEL EJERCICIO del index.html o DEL ARCHIVO validate.js 
