//INICIO PLANTILLA - PLANTILLA - PLANTILLA
dataExercise = {
  next: "../../../index.html", // Siguiente ejercicio
  procesar:"result_tipo_6_4_17()", //tal cual esta en la funcion result_tipo_x_x_x() de la parte inferior del archivo index o el archivo validate
  // El titulo tal cual esta en la carpetade paginacion  ejemplo Comunicacion/1/0/1/pagination.php
  titulo:"<center><h5><span>Lee</span>, <span>determina</span> y <span>escribe</span> «cc», «x» o «xc» según corresponda.</h5></center>",
} //6-2-11
document.getElementById("ftitle").innerHTML = dataExercise.titulo;
document.getElementById("boton1").setAttribute("onclick", dataExercise.procesar);
document.getElementById("nextExercise").setAttribute("href", dataExercise.next);
// FIN PLANTILLA - PLANTILLA - PLANTILLA

var cols = '.grid';
r = 0;
seleccion_lista();


function result_tipo_6_4_17() {
  
  
  
  
  r = 0;
  seleccion_lista();
  if (r == 10) {
      
      
      correcto();
  } else {
      incorrecto();
      // console.log(r);
      
      
  }

}