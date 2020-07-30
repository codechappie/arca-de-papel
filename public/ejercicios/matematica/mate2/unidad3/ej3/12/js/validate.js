//INICIO PLANTILLA - PLANTILLA - PLANTILLA
dataExercise = {
    next: "../../../index.html", // Siguiente ejercicio
    procesar: "result_tipo_2_2_14()", //tal cual esta en la funcion result_tipo_x_x_x() de la parte inferior del archivo index o el archivo validate
    // El titulo tal cual esta en la carpetade paginacion  ejemplo Comunicacion/1/0/1/pagination.php
    titulo: "<center><h5><span>Coloca</span> cómo se leen los siguientes números.</h5></center>",
}
document.getElementById("ftitle").innerHTML = dataExercise.titulo;
document.getElementById("boton1").setAttribute("onclick", dataExercise.procesar);
document.getElementById("nextExercise").setAttribute("href", dataExercise.next);
// FIN PLANTILLA - PLANTILLA - PLANTILLA



//COPIAR DEL EJERCICIO del index.html o DEL ARCHIVO validate.js 
//COPIAR DEL EJERCICIO del index.html o DEL ARCHIVO validate.js 
var rpta = 0, otros = 0, element;

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
    ui.draggable.draggable("disable", 1);
  }
});
console.log(rpta, otros);
// Formulario - Registrados

function result_tipo_2_2_14() {
    if (rpta == 4 && otros == 0) {
        correcto();

    }

    else {
        incorrecto();

    }
}

var cols = document.querySelectorAll('.aleatorio');

[].forEach.call(cols, (e)=>{

    for (var i = e.children.length; i >= 0; i--) {
        e.appendChild(e.children[Math.random() * i | 0]);
    }

});
//COPIAR DEL EJERCICIO del index.html o DEL ARCHIVO validate.js
//COPIAR DEL EJERCICIO del index.html o DEL ARCHIVO validate.js 
