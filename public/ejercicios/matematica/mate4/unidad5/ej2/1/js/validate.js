//INICIO PLANTILLA - PLANTILLA - PLANTILLA
dataExercise = {
  next: "../../../index.html", // Siguiente ejercicio
  procesar:"result_tipo_4_4_3()", //tal cual esta en la funcion result_tipo_x_x_x() de la parte inferior del archivo index o el archivo validate
  // El titulo tal cual esta en la carpetade paginacion  ejemplo Comunicacion/1/0/1/pagination.php
  titulo:"<center><h5><span>Arrastra</span> las fracciones propias a la recta numérica.</h5></center>",
} 
document.getElementById("ftitle").innerHTML = dataExercise.titulo;
document.getElementById("boton1").setAttribute("onclick", dataExercise.procesar);
document.getElementById("nextExercise").setAttribute("href", dataExercise.next);
// FIN PLANTILLA - PLANTILLA - PLANTILLA




//COPIAR DEL EJERCICIO del index.html o DEL ARCHIVO validate.js 
//COPIAR DEL EJERCICIO del index.html o DEL ARCHIVO validate.js 

var r = 0;
var clases = ".contenedor-palabras";
listar_random(clases);
arrastre();

//COPIAR DEL EJERCICIO del index.html o DEL ARCHIVO validate.js 
//COPIAR DEL EJERCICIO del index.html o DEL ARCHIVO validate.js 
function result_tipo_4_4_3() {
   

  if (r == 3) {
       
      correcto();
  } else {
      incorrecto();
       
  }

}