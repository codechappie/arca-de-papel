//INICIO PLANTILLA - PLANTILLA - PLANTILLA
dataExercise = {
  next: "../../../index.html", // Siguiente ejercicio
  procesar:"result_tipo_1_2_3()", //tal cual esta en la funcion result_tipo_x_x_x() de la parte inferior del archivo index o el archivo validate
  // El titulo tal cual esta en la carpetade paginacion  ejemplo Comunicacion/1/0/1/pagination.php
  titulo:"<center><h5><span>Ordena</span> las palabras y <span>forma</span> oraciones.</h5></center>",
} 
document.getElementById("ftitle").innerHTML = dataExercise.titulo;
document.getElementById("boton1").setAttribute("onclick", dataExercise.procesar);
document.getElementById("nextExercise").setAttribute("href", dataExercise.next);
// FIN PLANTILLA - PLANTILLA - PLANTILLA






//COPIAR DEL EJERCICIO del index.html o DEL ARCHIVO validate.js 
//COPIAR DEL EJERCICIO del index.html o DEL ARCHIVO validate.js 
var r = 0;

var ul = document.querySelector('.contenedor-silabas');
for (var i = ul.children.length; i >= 0; i--) {
    ul.appendChild(ul.children[Math.random() * i | 0]);
}
var ul = document.querySelector('.contenedor-silabas2');
for (var i = ul.children.length; i >= 0; i--) {
    ul.appendChild(ul.children[Math.random() * i | 0]);
}
var ul = document.querySelector('.contenedor-silabas3');
for (var i = ul.children.length; i >= 0; i--) {
    ul.appendChild(ul.children[Math.random() * i | 0]);
}

$(".pieza").draggable({
    start: function() {
        element = $(this).attr("id");

    }
});

// ta
$("#titox").droppable({

    drop: function(event, ui) {
        $("#" + element + " h4").css("background-color", "transparent");
        if (element == "tito") {
            r++
        }

        console.log(r);
        ui.draggable.draggable("disable", 1);
    }
});

// te
$("#tomax").droppable({

    drop: function(event, ui) {
        $("#" + element + " h4").css("background-color", "transparent");
        if (element == "toma") {
            r++
        }


        console.log(r);
        ui.draggable.draggable("disable", 1);
    }
});

// ti
$("#tilax").droppable({

    drop: function(event, ui) {
        $(this).css("background-color", "transparent");
        $("#" + element + " h4").css("background-color", "transparent");
        if (element == "tila") {
            r++
        }


        console.log(r);
        ui.draggable.draggable("disable", 1);
    }
});

// to
$("#leox").droppable({

    drop: function(event, ui) {
        $(this).css("background-color", "transparent");
        $("#" + element + " h4").css("background-color", "transparent");
        if (element == "leo") {
            r++
        }


        console.log(r);
        ui.draggable.draggable("disable", 1);
    }
});

// to2
$("#tomax2").droppable({

    drop: function(event, ui) {
        $(this).css("background-color", "transparent");
        $("#" + element + " h4").css("background-color", "transparent");

        if (element == "toma2") {
            r++
        }


        console.log(r);
        ui.draggable.draggable("disable", 1);
    }
});

// to2
$("#tex").droppable({

    drop: function(event, ui) {
        $(this).css("background-color", "transparent");
        $("#" + element + " h4").css("background-color", "transparent");

        if (element == "te") {
            r++
        }


        console.log(r);
        ui.draggable.draggable("disable", 1);
    }
});

// tu
$("#tux").droppable({

    drop: function(event, ui) {
        $(this).css("background-color", "transparent");
        $("#" + element + " h4").css("background-color", "transparent");

        if (element == "tu") {
            r++
        }


        console.log(r);
        ui.draggable.draggable("disable", 1);
    }
});

$("#topox").droppable({

    drop: function(event, ui) {
        $(this).css("background-color", "transparent");
        $("#" + element + " h4").css("background-color", "transparent");

        if (element == "topo") {
            r++
        }


        console.log(r);
        ui.draggable.draggable("disable", 1);
    }
});

$("#peleax").droppable({

    drop: function(event, ui) {
        $(this).css("background-color", "transparent");
        $("#" + element + " h4").css("background-color", "transparent");

        if (element == "pelea") {
            r++
        }
        console.log(r);
        ui.draggable.draggable("disable", 1);
    }
});

function result_tipo_1_2_3() {
  
  
  
  

    if (r == 9) {
       
        correcto();
    } else {
        incorrecto();
       
    }

}
//COPIAR DEL EJERCICIO del index.html o DEL ARCHIVO validate.js 
//COPIAR DEL EJERCICIO del index.html o DEL ARCHIVO validate.js 
