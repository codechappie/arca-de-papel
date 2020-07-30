//INICIO PLANTILLA - PLANTILLA - PLANTILLA
dataExercise = {
  next: "../../../index.html", // Siguiente ejercicio
  procesar:"result_tipo_4_5_1()", //tal cual esta en la funcion result_tipo_x_x_x() de la parte inferior del archivo index o el archivo validate
  // El titulo tal cual esta en la carpetade paginacion  ejemplo Comunicacion/1/0/1/pagination.php
  titulo:"<center><h5> <span>Lee</span> y <span>completa</span> la tabla y los recuadros según corresponda. Para ello utiliza el teclado de la pantalla.</h5></center>",
} 
document.getElementById("ftitle").innerHTML = dataExercise.titulo;
document.getElementById("boton1").setAttribute("onclick", dataExercise.procesar);
document.getElementById("nextExercise").setAttribute("href", dataExercise.next);
// FIN PLANTILLA - PLANTILLA - PLANTILLA

numeros();

var r = 0;
operacion_numeros();
function result_tipo_4_5_1() {
  
  r = 0;
  comprobar_operacion_numeros();
  if (r == 8) {
     
      correcto();
  } else {
      incorrecto();
      
  }

}