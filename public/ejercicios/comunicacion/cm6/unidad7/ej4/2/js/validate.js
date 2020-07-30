//INICIO PLANTILLA - PLANTILLA - PLANTILLA
dataExercise = {
  next: "../2/index.html", // Siguiente ejercicio
  procesar:"result_tipo_1_2_2()", //tal cual esta en la funcion result_tipo_x_x_x() de la parte inferior del archivo index o el archivo validate
  // El titulo tal cual esta en la carpetade paginacion  ejemplo Comunicacion/1/0/1/pagination.php
  titulo:"<center><h5><span>Selecciona</span>. Según el texto, ¿qué hace falta para integrarse totalmente en la sociedad?</h5></center>",
} //6-2-11
document.getElementById("ftitle").innerHTML = dataExercise.titulo;
document.getElementById("boton1").setAttribute("onclick", dataExercise.procesar);
document.getElementById("nextExercise").setAttribute("href", dataExercise.next);
// FIN PLANTILLA - PLANTILLA - PLANTILLA






//COPIAR DEL EJERCICIO del index.html o DEL ARCHIVO validate.js 
//COPIAR DEL EJERCICIO del index.html o DEL ARCHIVO validate.js 



var r = 0;

var clases = ".contenedor-check";
listar_random(clases);

seleccion_click();

function result_tipo_6_2_11() {
 
 
 
 

  if (r == 1) {
      localStorage.setItem("Nota<?=$cod?>", nota);
      localStorage.setItem("Time<?=$cod?>", tiempo);
      correcto();
  } else {
      incorrecto();
      localStorage.setItem("Nota<?=$cod?>", "0");
      localStorage.setItem("Time<?=$cod?>", tiempo);
  }

}



//COPIAR DEL EJERCICIO del index.html o DEL ARCHIVO validate.js 
//COPIAR DEL EJERCICIO del index.html o DEL ARCHIVO validate.js 
