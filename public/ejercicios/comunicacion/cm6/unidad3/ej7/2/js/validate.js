//INICIO PLANTILLA - PLANTILLA - PLANTILLA
dataExercise = {
  next: "../../../index.html", // Siguiente ejercicio
  procesar:"result_tipo_6_2_15()", //tal cual esta en la funcion result_tipo_x_x_x() de la parte inferior del archivo index o el archivo validate
  // El titulo tal cual esta en la carpetade paginacion  ejemplo Comunicacion/1/0/1/pagination.php
  titulo:"<center><h5><span>Identifica</span> las partes del siguiente mapa conceptual.</h5></center>",
} //6-2-2
document.getElementById("ftitle").innerHTML = dataExercise.titulo;
document.getElementById("boton1").setAttribute("onclick", dataExercise.procesar);
document.getElementById("nextExercise").setAttribute("href", dataExercise.next);
// FIN PLANTILLA - PLANTILLA - PLANTILLA

var r = 0;

var clases = ".contenedor-check";
listar_random(clases);

seleccion_click();


function result_tipo_6_2_15() {
  
  
  
  

  if (r == 4) {
      
      
      correcto();
  } else {
      incorrecto();
      
      
  }

}