//INICIO PLANTILLA - PLANTILLA - PLANTILLA
dataExercise = {
    next: "../11/index.html", // Siguiente ejercicio
    procesar: "result_tipo_2_2_12()", //tal cual esta en la funcion result_tipo_x_x_x() de la parte inferior del archivo index o el archivo validate
    // El titulo tal cual esta en la carpetade paginacion  ejemplo Comunicacion/1/0/1/pagination.php
    titulo: "<center><h5><span>Coloca</span> en el rectángulo, el número que corresponde.</h5></center>",
}
document.getElementById("ftitle").innerHTML = dataExercise.titulo;
document.getElementById("boton1").setAttribute("onclick", dataExercise.procesar);
document.getElementById("nextExercise").setAttribute("href", dataExercise.next);
// FIN PLANTILLA - PLANTILLA - PLANTILLA



//COPIAR DEL EJERCICIO del index.html o DEL ARCHIVO validate.js 
//COPIAR DEL EJERCICIO del index.html o DEL ARCHIVO validate.js 
rpta =0;
otros =0;
$(".obj").draggable({
    
    start: function() {
       element=$(this).attr("data-value"); 
    }
  });
  $( ".droppable" ).droppable({
    classes: {
      "ui-droppable-active": ".blue",
      "ui-droppable-hover": "ui-state-hover"
    },
    drop: function( event, ui ) {
      $(this).css("background-color", "cornflowerblue");
      $(".obj").css("border", "none");
    //  $( this ).target.append(event.target);
      element2 = $(this).attr("data-value");
      if(element==element2){
        rpta++;
      }else{
        otros++;
      }
      element.removeClass("pieza");
    }
  });
  console.log(rpta, otros);
  // Formulario - Registrados
  
  function result_tipo_2_2_12() {
  
      if (rpta == 4 && otros == 0) {
          correcto();
  
      }
  
      else {
          incorrecto();
  
      }
  }
  
//COPIAR DEL EJERCICIO del index.html o DEL ARCHIVO validate.js
//COPIAR DEL EJERCICIO del index.html o DEL ARCHIVO validate.js 
