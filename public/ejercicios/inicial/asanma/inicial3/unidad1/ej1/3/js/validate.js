listar_random(".aleatorio");
//INICIO PLANTILLA - PLANTILLA - PLANTILLA
dataExercise = {
  next: "../../../", // Siguiente ejercicio
  procesar: "result_tipo_1_0_3()", //tal cual esta en la funcion result_tipo_x_x_x() de la parte inferior del archivo index o el archivo validate
  // El titulo tal cual esta en la carpetade paginacion  ejemplo Comunicacion/1/0/1/pagination.php
  titulo: "<center><h5><span>Selecciona</span> en cada caso la sombra que le corresponde a cada figura.</h5></center>",
}
document.getElementById("ftitle").innerHTML = dataExercise.titulo;
document.getElementById("boton1").setAttribute("onclick", dataExercise.procesar);
document.getElementById("nextExercise").setAttribute("href", dataExercise.next);
// FIN PLANTILLA - PLANTILLA - PLANTILLA


var r = 0;

seleccion_click();

function result_tipo_1_0_3() {
  

  if (r == 3) {
    correcto();
  }
  else {
    incorrecto();
  }

}