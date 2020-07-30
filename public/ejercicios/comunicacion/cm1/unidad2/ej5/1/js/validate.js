//INICIO PLANTILLA - PLANTILLA - PLANTILLA
dataExercise = {
  next: "../2/", // Siguiente ejercicio
  procesar:"result_tipo_1_1_9()", //tal cual esta en la funcion result_tipo_x_x_x() de la parte inferior del archivo index o el archivo validate
  // El titulo tal cual esta en la carpetade paginacion  ejemplo Comunicacion/1/0/1/pagination.php
  titulo:"<center><h5><span>Arrastra</span> un sustantivo propio para cada persona.</h5></center>",
} 
document.getElementById("ftitle").innerHTML = dataExercise.titulo;
document.getElementById("boton1").setAttribute("onclick", dataExercise.procesar);
document.getElementById("nextExercise").setAttribute("href", dataExercise.next);
// FIN PLANTILLA - PLANTILLA - PLANTILLA



var r = 0;
var b = false;
var c = false;

var ul = document.querySelector('.contenedor-silabas');
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
        fila = $(this).attr("fila");
        elementid.css("background-color", "transparent");

        if (element == "m" || element == "f") {
            if (fila == "dos") {
                if (element == "m") {
                    console.log(b);
                    if (!b) {
                        r++;
                        b = true;
                        console.log(b);
                        console.log(r);


                    }
                } else {
                    r++;

                }
            } else {
                if (fila == "tres") {
                    if (element == "m") {
                        if (!c) {
                            r++;
                            c = true;
                        }
                    } else {
                        r++;
                    }
                } else {
                    if (element == element2) {
                        r++;
                    }
                }
            }
        }




        ui.draggable.draggable("disable", 1);
    }
});

 // Validar
 function result_tipo_1_1_9() {
  if (r == 6) {
      correcto();
  } else {
      incorrecto();
  }

}