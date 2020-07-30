//INICIO PLANTILLA - PLANTILLA - PLANTILLA
dataExercise = {
  next: "../4/index.html", // Siguiente ejercicio
  procesar:"result_tipo_3_7_10()", //tal cual esta en la funcion result_tipo_x_x_x() de la parte inferior del archivo index o el archivo validate
  // El titulo tal cual esta en la carpetade paginacion  ejemplo Comunicacion/1/0/1/pagination.php
  titulo:"<center><h5><span>Encuentra</span> las palabras en la sopa de letras.</h5></center>",
} //3-7-10
document.getElementById("ftitle").innerHTML = dataExercise.titulo;
document.getElementById("boton1").setAttribute("onclick", dataExercise.procesar);
document.getElementById("nextExercise").setAttribute("href", dataExercise.next);
// FIN PLANTILLA - PLANTILLA - PLANTILLA




