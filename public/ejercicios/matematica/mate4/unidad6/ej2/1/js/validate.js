//INICIO PLANTILLA - PLANTILLA - PLANTILLA
dataExercise = {
  next: "../../../index.html", // Siguiente ejercicio
  procesar:"result_tipo_4_5_2()", //tal cual esta en la funcion result_tipo_x_x_x() de la parte inferior del archivo index o el archivo validate
  // El titulo tal cual esta en la carpetade paginacion  ejemplo Comunicacion/1/0/1/pagination.php
  titulo:"<center><h5> <span>Lee</span> el problema y <span>resuelve</span>. Luego, <span>selecciona</span> de la lista de los recuadros lo que corresponda. </h5></center>",
} 
document.getElementById("ftitle").innerHTML = dataExercise.titulo;
document.getElementById("boton1").setAttribute("onclick", dataExercise.procesar);
document.getElementById("nextExercise").setAttribute("href", dataExercise.next);
// FIN PLANTILLA - PLANTILLA - PLANTILLA


//COPIAR DEL EJERCICIO del index.html o DEL ARCHIVO validate.js 
//COPIAR DEL EJERCICIO del index.html o DEL ARCHIVO validate.js 


function result_tipo_4_5_2() {
  
  r = 0;
  seleccion_lista();
  console.log(r);
  if (r == 9) {
      
      correcto();
  } else {
      incorrecto();
       
  }

}
