//INICIO PLANTILLA - PLANTILLA - PLANTILLA
dataExercise = {
  next: "../../..", // Siguiente ejercicio
  procesar:"result_tipo_1_1_8()", //tal cual esta en la funcion result_tipo_x_x_x() de la parte inferior del archivo index o el archivo validate
  // El titulo tal cual esta en la carpetade paginacion  ejemplo Comunicacion/1/0/1/pagination.php
  titulo:"<center><h5><span>Arrastra</span> la sílaba con la que empieza cada imagen.</h5></center>",
} 
document.getElementById("ftitle").innerHTML = dataExercise.titulo;
document.getElementById("boton1").setAttribute("onclick", dataExercise.procesar);
document.getElementById("nextExercise").setAttribute("href", dataExercise.next);
// FIN PLANTILLA - PLANTILLA - PLANTILLA

var r = 0;
var la = 0;
var le = 0;
var li = 0;
var lo = 0;
var lu = 0;

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
    classes: {
        "ui-droppable-active": "ui-state-active",
        "ui-droppable-hover": "ui-state-hover"
    },
    drop: function(event, ui) {
        $(this).css("background-color", "transparent");
        $("#" + element + " h4").css("background-color", "transparent");
        if (element == "la") {
            la++
        }
        ui.draggable.draggable("disable", 1);
    }
});

// le
$("#le").droppable({
    classes: {
        "ui-droppable-active": "ui-state-active",
        "ui-droppable-hover": "ui-state-hover"
    },
    drop: function(event, ui) {
        $(this).css("background-color", "transparent");
        $("#" + element + " h4").css("background-color", "transparent");
        if (element == "le") {
            le++
        }
        ui.draggable.draggable("disable", 1);
    }
});

// li
$("#li").droppable({
    classes: {
        "ui-droppable-active": "ui-state-active",
        "ui-droppable-hover": "ui-state-hover"
    },
    drop: function(event, ui) {
        $(this).css("background-color", "transparent");
        $("#" + element + " h4").css("background-color", "#3333");
        if (element == "li") {
            li++
        }
        ui.draggable.draggable("disable", 1);
    }
});

// lo
$("#lo").droppable({
    classes: {
        "ui-droppable-active": "ui-state-active",
        "ui-droppable-hover": "ui-state-hover"
    },
    drop: function(event, ui) {
        $(this).css("background-color", "transparent");
        $("#" + element + " h4").css("background-color", "transparent");
        if (element == "lo") {
            lo++
        }
        ui.draggable.draggable("disable", 1);
    }
});

// lu
$("#lu").droppable({
    classes: {
        "ui-droppable-active": "ui-state-active",
        "ui-droppable-hover": "ui-state-hover"
    },
    drop: function(event, ui) {
        $(this).css("background-color", "transparent");
        $("#" + element + " h4").css("background-color", "transparent");

        //  $( this ).target.append(event.target);
        if (element == "lu") {
            lu++
        }
        ui.draggable.draggable("disable", 1);
    }
});
// Validar
function result_tipo_1_1_8() {

  if (la == 1 && le == 1 && li == 1 && lo == 1 && lu == 1) {
      correcto();
  } else {
      incorrecto();
  }

}