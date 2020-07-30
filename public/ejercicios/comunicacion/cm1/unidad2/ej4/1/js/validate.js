//INICIO PLANTILLA - PLANTILLA - PLANTILLA
dataExercise = {
  next: "../2/", // Siguiente ejercicio
  procesar:"result_tipo_1_1_7()", //tal cual esta en la funcion result_tipo_x_x_x() de la parte inferior del archivo index o el archivo validate
  // El titulo tal cual esta en la carpetade paginacion  ejemplo Comunicacion/1/0/1/pagination.php
  titulo:"<center><h5><span>Completa</span> con la sílaba La, Le o Lo, según corresponda.</h5></center>",
} 
document.getElementById("ftitle").innerHTML = dataExercise.titulo;
document.getElementById("boton1").setAttribute("onclick", dataExercise.procesar);
document.getElementById("nextExercise").setAttribute("href", dataExercise.next);
// FIN PLANTILLA - PLANTILLA - PLANTILLA





var r = 0;
var la = 0;
var la2 = 0;
var le = 0;
var lo = 0;
var lo2 = 0;

var ul = document.querySelector('.contenedor-silabas');
for (var i = ul.children.length; i >= 0; i--) {
    ul.appendChild(ul.children[Math.random() * i | 0]);
}

$(".pieza").draggable({
    start: function() {
        element = $(this).attr("id");
    }
});

// la
$("#la").droppable({

    drop: function(event, ui) {
        $("#" + element + " h4").css("background-color", "transparent");
        if (element == "laa" || element == "laa2") {
            la++
            console.log(element);
        }
        ui.draggable.draggable("disable", 1);
    }
});

// la2
$("#la2").droppable({

    drop: function(event, ui) {
        $("#" + element + " h4").css("background-color", "transparent");
        if (element == "laa" || element == "laa2") {
            la2++
            console.log(la2);
        }
        ui.draggable.draggable("disable", 1);
    }
});

// le
$("#le").droppable({

    drop: function(event, ui) {
        $(this).css("background-color", "transparent");
        $("#" + element + " h4").css("background-color", "transparent");
        if (element == "lee") {
            le++
        }
        ui.draggable.draggable("disable", 1);
    }
});

// lo
$("#lo").droppable({

    drop: function(event, ui) {
        $(this).css("background-color", "transparent");
        $("#" + element + " h4").css("background-color", "transparent");
        if (element == "loo" || element == "loo2") {
            lo++
        }
        ui.draggable.draggable("disable", 1);
    }
});

// lo2
$("#lo2").droppable({

    drop: function(event, ui) {
        $(this).css("background-color", "transparent");
        $("#" + element + " h4").css("background-color", "transparent");

        if (element == "loo" || element == "loo2") {
            lo2++
        }
        ui.draggable.draggable("disable", 1);
    }
});


 // Validar
 function result_tipo_1_1_7() {

  if (la == 1 && la2 == 1 && le == 1 && lo == 1 && lo2 == 1) {
      correcto();
  } else {
      incorrecto();
  }

}