//INICIO PLANTILLA - PLANTILLA - PLANTILLA
dataExercise = {
  next: "../../../index.html", // Siguiente ejercicio
  procesar:"result_tipo_5_4_3()", //tal cual esta en la funcion result_tipo_x_x_x() de la parte inferior del archivo index o el archivo validate
  // El titulo tal cual esta en la carpetade paginacion  ejemplo Comunicacion/1/0/1/pagination.php
  titulo:"<center><h5><span>Ubica</span> en la tabla el tipo de ají utilizado para preparar los platos mencionados.</h5></center>",
} 
document.getElementById("ftitle").innerHTML = dataExercise.titulo;
document.getElementById("boton1").setAttribute("onclick", dataExercise.procesar);
document.getElementById("nextExercise").setAttribute("href", dataExercise.next);
// FIN PLANTILLA - PLANTILLA - PLANTILLA

r = 0;
arrastre();
listar_random(".alea");





//COPIAR DEL EJERCICIO del index.html o DEL ARCHIVO validate.js 
//COPIAR DEL EJERCICIO del index.html o DEL ARCHIVO validate.js 



function result_tipo_5_4_3() {
  var min = $('#Minutos').text();
  var seg = $('#Segundos').text();
  var milseg = $('#Centesimas').text();
  var tiempo = min + ":" + seg + ":" + milseg;

  if (r == 6) {
      console.log(r)
      
      
      correcto();
  } else {
      incorrecto();
      console.log(r)
      
      
  }

}




//COPIAR DEL EJERCICIO del index.html o DEL ARCHIVO validate.js 
//COPIAR DEL EJERCICIO del index.html o DEL ARCHIVO validate.js 
