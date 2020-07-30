//INICIO PLANTILLA - PLANTILLA - PLANTILLA
dataExercise = {
  next: "../3/index.html", // Siguiente ejercicio
  procesar:"result_tipo_6_4_16()", //tal cual esta en la funcion result_tipo_x_x_x() de la parte inferior del archivo index o el archivo validate
  // El titulo tal cual esta en la carpetade paginacion  ejemplo Comunicacion/1/0/1/pagination.php
  titulo:"<center><h5><span>Agrega</span> la letra que corresponda en cada caso.</h5></center>",
} //6-2-11
document.getElementById("ftitle").innerHTML = dataExercise.titulo;
document.getElementById("boton1").setAttribute("onclick", dataExercise.procesar);
document.getElementById("nextExercise").setAttribute("href", dataExercise.next);
// FIN PLANTILLA - PLANTILLA - PLANTILLA





var cols = '.grid';
r = 0;
seleccion_lista();


function result_tipo_6_4_16() {
  
  
  
  
  r = 0;
  seleccion_lista();
  if (r == 8) {
      
      
      correcto();
  } else {
      incorrecto();
      // console.log(r);
      
      
  }

}