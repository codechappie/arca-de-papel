//INICIO PLANTILLA - PLANTILLA - PLANTILLA
dataExercise = {
  next: "../3/index.html", // Siguiente ejercicio
  procesar:"result_tipo_2_7_10()", //tal cual esta en la funcion result_tipo_x_x_x() de la parte inferior del archivo index o el archivo validate
  // El titulo tal cual esta en la carpetade paginacion  ejemplo Comunicacion/1/0/1/pagination.php
  titulo:"<center><h5><span>Observa</span> los siguientes verbos, luego <span>arrastralos</span> en el recuadro que corresponda.</h5></center>",
} 
document.getElementById("ftitle").innerHTML = dataExercise.titulo;
document.getElementById("boton1").setAttribute("onclick", dataExercise.procesar);
document.getElementById("nextExercise").setAttribute("href", dataExercise.next);
// FIN PLANTILLA - PLANTILLA - PLANTILLA


var r = 0;

var ul = document.querySelector('.contenedor-palabras');
for (var i = ul.children.length; i >= 0; i--) {
    ul.appendChild(ul.children[Math.random() * i | 0]);
}

$(".pieza").draggable({
    start: function() {
        element = $(this).attr("alt");
        elementid = $(this);
    }
});

$(".respuesta").droppable({
    drop: function(event, ui) {
        $(this).css("background-color", "rgba(139, 195, 74, 0.14)");
        element2 = $(this).attr("alt");
        elementid.css({
            "background-color": "transparent",
            "border-color": "transparent"
        });
        if (element == element2) {
            r++;
        }
        ui.draggable.draggable("disable", 1);
    }
});

function result_tipo_2_7_10() {

    if (r == 9) {
        correcto();
    } else {
        incorrecto();
    }

}