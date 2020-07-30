//INICIO PLANTILLA - PLANTILLA - PLANTILLA
dataExercise = {
  next: "../../../index.html", // Siguiente ejercicio
  procesar:"result_tipo_6_3_18()", //tal cual esta en la funcion result_tipo_x_x_x() de la parte inferior del archivo index o el archivo validate
  // El titulo tal cual esta en la carpetade paginacion  ejemplo Comunicacion/1/0/1/pagination.php
  titulo:"<center><h5><span>Identifica</span> el tipo de determinante en cada caso, luego <span>arrastra</span> el tipo al recuadro.</h5></center>",
} //6-2-11
document.getElementById("ftitle").innerHTML = dataExercise.titulo;
document.getElementById("boton1").setAttribute("onclick", dataExercise.procesar);
document.getElementById("nextExercise").setAttribute("href", dataExercise.next);
// FIN PLANTILLA - PLANTILLA - PLANTILLA


r = 0;
arrastre();
listar_random(".alea");
function result_tipo_6_3_18() {
  
  
  
  

  if (r == 6) {
      console.log(r)
      
      
      correcto();
  } else {
      incorrecto();
      console.log(r)
      
      
  }
}