//INICIO PLANTILLA - PLANTILLA - PLANTILLA
dataExercise = {
  next: "../6/index.html", // Siguiente ejercicio
  procesar:"result_tipo_3_7_21()", //tal cual esta en la funcion result_tipo_x_x_x() de la parte inferior del archivo index o el archivo validate
  // El titulo tal cual esta en la carpetade paginacion  ejemplo Comunicacion/1/0/1/pagination.php
  titulo:"<center><h5><span>Ordena</span> las imágenes según la secuencia de la historia.</h5></center>",
} //3-7-21
document.getElementById("ftitle").innerHTML = dataExercise.titulo;
document.getElementById("boton1").setAttribute("onclick", dataExercise.procesar);
document.getElementById("nextExercise").setAttribute("href", dataExercise.next);
// FIN PLANTILLA - PLANTILLA - PLANTILLA





var r = 0;

var ul = document.querySelector('.contenedor-imagen');
for (var i = ul.children.length; i >= 0; i--) {
    ul.appendChild(ul.children[Math.random() * i | 0]);
}


$(".pieza").draggable({
    start: function() {
        element = $(this).attr("alt");
        elementid = $(this);
    }
});

$(".item").droppable({
    drop: function(event, ui) {
        $(this).css("background-color", "rgba(139, 195, 74, 0.14)");
        element2 = $(this).attr("alt");
        elementid.css("background-color", "transparent");
        if (element == element2) {
            r++;
        }
        element.removeClass("pieza");
    }
});
function result_tipo_3_7_21() {
    
    
    
    


    if (r == 4) {
        
        
        correcto();
    } else {
        incorrecto();
        
        
    }

};