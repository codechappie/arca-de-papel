//INICIO PLANTILLA - PLANTILLA - PLANTILLA
dataExercise = {
  next: "../../../index.html", // Siguiente ejercicio
  procesar:"result_tipo_1_3_5()", //tal cual esta en la funcion result_tipo_x_x_x() de la parte inferior del archivo index o el archivo validate
  // El titulo tal cual esta en la carpetade paginacion  ejemplo Comunicacion/1/0/1/pagination.php
  titulo:"<center><h5><span>Completa</span> las oraciones con las palabras del recuadro.</h5></center>",
} 
document.getElementById("ftitle").innerHTML = dataExercise.titulo;
document.getElementById("boton1").setAttribute("onclick", dataExercise.procesar);
document.getElementById("nextExercise").setAttribute("href", dataExercise.next);
// FIN PLANTILLA - PLANTILLA - PLANTILLA






//COPIAR DEL EJERCICIO del index.html o DEL ARCHIVO validate.js 
//COPIAR DEL EJERCICIO del index.html o DEL ARCHIVO validate.js 
var r = 0;

var ol = document.querySelector('.contenedor-oraciones');
for (var i = ol.children.length; i >= 0; i--) {
    ol.appendChild(ol.children[Math.random() * i | 0]);
}

$(".pieza").draggable({
    start: function() {
        element = $(this).attr("id");
        console.log(element);

    }
});
// uA
$("#familiaa").droppable({
    drop: function(event, ui) {
        $(this).css("background-color", "rgba(139, 195, 74, 0.14)");
        $("#" + element).css("background-color", "transparent");
        if (element == "familia") {
            r++;
        }
        ui.draggable.draggable("disable", 1);
        console.log(r);
    }
});
$("#elefantee").droppable({
    classes: {
        "ui-droppable-active": "ui-state-active",
        "ui-droppable-hover": "ui-state-hover"
    },
    drop: function(event, ui) {
        $(this).css("background-color", "rgba(139, 195, 74, 0.14)");
        $("#" + element).css("background-color", "transparent");
        if (element == "elefante") {
            r++;
        }
        ui.draggable.draggable("disable", 1);
        console.log(r);
    }
});
$("#finn").droppable({
    classes: {
        "ui-droppable-active": "ui-state-active",
        "ui-droppable-hover": "ui-state-hover"
    },
    drop: function(event, ui) {
        $(this).css("background-color", "rgba(139, 195, 74, 0.14)");
        $("#" + element).css("background-color", "transparent");
        if (element == "fin") {
            r++;
        }
        ui.draggable.draggable("disable", 1);
        console.log(r);
    }
});
$("#fabulosoo").droppable({
    classes: {
        "ui-droppable-active": "ui-state-active",
        "ui-droppable-hover": "ui-state-hover"
    },
    drop: function(event, ui) {
        $(this).css("background-color", "rgba(139, 195, 74, 0.14)");
        $("#" + element).css("background-color", "transparent");
        if (element == "fabuloso") {
            r++;
        }
        ui.draggable.draggable("disable", 1);
        console.log(r);
    }
});

function result_tipo_1_3_5() {
    
    
    
    

    if (r == 4) {
        
        correcto();
    } else {
        incorrecto();
        
        
    }
    }
//COPIAR DEL EJERCICIO del index.html o DEL ARCHIVO validate.js 
//COPIAR DEL EJERCICIO del index.html o DEL ARCHIVO validate.js 
