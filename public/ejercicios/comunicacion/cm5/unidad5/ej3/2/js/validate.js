//INICIO PLANTILLA - PLANTILLA - PLANTILLA
dataExercise = {
  next: "../3/index.html", // Siguiente ejercicio
  procesar:"result_tipo_5_4_8()", //tal cual esta en la funcion result_tipo_x_x_x() de la parte inferior del archivo index o el archivo validate
  // El titulo tal cual esta en la carpetade paginacion  ejemplo Comunicacion/1/0/1/pagination.php
  titulo:"<center><h5><span>Identifica</span> el tipo de pronombre y coloca el nombre al lado de la oración.</h5></center>",
} 
document.getElementById("ftitle").innerHTML = dataExercise.titulo;
document.getElementById("boton1").setAttribute("onclick", dataExercise.procesar);
document.getElementById("nextExercise").setAttribute("href", dataExercise.next);
// FIN PLANTILLA - PLANTILLA - PLANTILLA






//COPIAR DEL EJERCICIO del index.html o DEL ARCHIVO validate.js 
//COPIAR DEL EJERCICIO del index.html o DEL ARCHIVO validate.js 



r = 0;
arrastre();
listar_random(".alea");

function result_tipo_5_4_8() {
 
 
 
 

  if (r == 4) {
      console.log(r)
      
      
      correcto();
  } else {
      incorrecto();
      console.log(r)
      
      
  }

}


//COPIAR DEL EJERCICIO del index.html o DEL ARCHIVO validate.js 
//COPIAR DEL EJERCICIO del index.html o DEL ARCHIVO validate.js 
