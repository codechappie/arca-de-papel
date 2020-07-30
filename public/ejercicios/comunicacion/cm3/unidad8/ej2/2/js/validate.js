//INICIO PLANTILLA - PLANTILLA - PLANTILLA
dataExercise = {
  next: "../3/index.html", // Siguiente ejercicio
  procesar:"result_tipo_3_8_20()", //tal cual esta en la funcion result_tipo_x_x_x() de la parte inferior del archivo index o el archivo validate
  // El titulo tal cual esta en la carpetade paginacion  ejemplo Comunicacion/1/0/1/pagination.php
  titulo:"<center><h5><span>Completa</span> el diagrama de árbol.</h5></center>",
} //3-8-20
document.getElementById("ftitle").innerHTML = dataExercise.titulo;
document.getElementById("boton1").setAttribute("onclick", dataExercise.procesar);
document.getElementById("nextExercise").setAttribute("href", dataExercise.next);
// FIN PLANTILLA - PLANTILLA - PLANTILLA


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

$(".table-respuesta").droppable({
    drop: function(event, ui) {
        $(this).css("background-color", "rgba(139, 195, 74, 0.14)");
        element2 = $(this).attr("alt");
        elementid.css("background-color", "transparent");
        console.log(element2);
        if (element2 == "estado") {
            var num = $(this).attr("numero");
            var attralt = elementid.attr("estado");

            $("." + num).attr("alt", attralt);
            console.log($("." + num).attr("alt"));

            if (element == element2) {
                r++;
            }

        } else {
            if (element == element2) {
                r++;
            }
        }

        console.log(r);
        ui.draggable.draggable("disable", 1);
    }
});
function result_tipo_3_8_20() {
    
    
    
    

    if (r == 5) {
        
        
        correcto();
    } else {
        incorrecto();
        
        
    }

}