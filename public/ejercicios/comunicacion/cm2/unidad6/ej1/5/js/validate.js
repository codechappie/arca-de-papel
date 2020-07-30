//INICIO PLANTILLA - PLANTILLA - PLANTILLA
dataExercise = {
  next: "../../../index.html", // Siguiente ejercicio
  procesar:"result_tipo_2_5_4()", //tal cual esta en la funcion result_tipo_x_x_x() de la parte inferior del archivo index o el archivo validate
  // El titulo tal cual esta en la carpetade paginacion  ejemplo Comunicacion/1/0/1/pagination.php
  titulo:"<center><h5><span>Lee</span> los siguientes hechos y <span>arrastra</span> el número que le corresponde según el texto.</h5></center>",
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
var ul = document.querySelector('.contenedor-ejercicios');
for (var i = ul.children.length; i >= 0; i--) {
    ul.appendChild(ul.children[Math.random() * i | 0]);
}
$(".pieza").draggable({
    start: function() {
        element = $(this).attr("alt");
        elementid = $(this);
    }
});

$(".palabra").droppable({
    drop: function(event, ui) {
        $(this).css("background-color", "rgba(139, 195, 74, 0.14)");
        element2 = $(this).attr("alt");
        elementid.css("background-color", "transparent");
        if (element == element2) {
            r++;
        }
        ui.draggable.draggable("disable", 1);
    }
});

function result_tipo_2_5_4() {
    
    
    
    
    if (r == 5) {
        
        correcto();
    } else {
        incorrecto();
        
    }

}
//COPIAR DEL EJERCICIO del index.html o DEL ARCHIVO validate.js 
//COPIAR DEL EJERCICIO del index.html o DEL ARCHIVO validate.js 
