//INICIO PLANTILLA - PLANTILLA - PLANTILLA
dataExercise = {
  next: "../2/index.html", // Siguiente ejercicio
  procesar:"result_tipo_6_5_4()", //tal cual esta en la funcion result_tipo_x_x_x() de la parte inferior del archivo index o el archivo validate
  // El titulo tal cual esta en la carpetade paginacion  ejemplo Comunicacion/1/0/1/pagination.php
  titulo:"<center><h5><span>Agrega</span> el guion o la raya según corresponda en cada caso.</h5></center>",
} //6-2-4
document.getElementById("ftitle").innerHTML = dataExercise.titulo;
document.getElementById("boton1").setAttribute("onclick", dataExercise.procesar);
document.getElementById("nextExercise").setAttribute("href", dataExercise.next);
// FIN PLANTILLA - PLANTILLA - PLANTILLA



var r = 0;

$('.letrax').click(function() {
    $(this).css("width", "auto");
    $(this).removeClass("letra");
    var element = $(this).attr("alt");
    var select = $(this).attr("value");
    if (select != "seleccionado") {

        if (element == "n") {
            r++;
            $(this).attr("value", "seleccionado");
            console.log(r)
        } else {
            r--;
            console.log(r)
            $(this).attr("value", "seleccionado");
        }
    }
})


function result_tipo_6_5_4() {
  
  
  
  

  if (r == 8) {
      console.log(r)
      
      
      correcto();
  } else {
      console.log(r)
      incorrecto();
      
      
  }
}