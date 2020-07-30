//INICIO PLANTILLA - PLANTILLA - PLANTILLA
dataExercise = {
  next: "../7/index.html", // Siguiente ejercicio
  procesar:"result_tipo_5_3_10()", //tal cual esta en la funcion result_tipo_x_x_x() de la parte inferior del archivo index o el archivo validate
  // El titulo tal cual esta en la carpetade paginacion  ejemplo Comunicacion/1/0/1/pagination.php
  titulo:"<center><h5><span>Efectúa</span> las operaciones y <span>halla</span> el valor. Luego, <span>selecciona</span> de la lista los valores correspondientes.</h5></center>",
} 
document.getElementById("ftitle").innerHTML = dataExercise.titulo;
document.getElementById("boton1").setAttribute("onclick", dataExercise.procesar);
document.getElementById("nextExercise").setAttribute("href", dataExercise.next);
// FIN PLANTILLA - PLANTILLA - PLANTILLA





//COPIAR DEL EJERCICIO del index.html o DEL ARCHIVO validate.js 
//COPIAR DEL EJERCICIO del index.html o DEL ARCHIVO validate.js 
ramdom_select();


//COPIAR DEL EJERCICIO del index.html o DEL ARCHIVO validate.js 
//COPIAR DEL EJERCICIO del index.html o DEL ARCHIVO validate.js 
function result_tipo_5_3_10() {
  
  r=0;
  seleccion_lista();
  if (r == 11) {
       
      correcto();
  } else {
      incorrecto();
       
  }

}