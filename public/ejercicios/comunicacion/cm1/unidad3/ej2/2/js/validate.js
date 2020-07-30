//INICIO PLANTILLA - PLANTILLA - PLANTILLA
dataExercise = {
  next: "../3/index.html", // Siguiente ejercicio
  procesar:"result_tipo_1_2_5()", //tal cual esta en la funcion result_tipo_x_x_x() de la parte inferior del archivo index o el archivo validate
  // El titulo tal cual esta en la carpetade paginacion  ejemplo Comunicacion/1/0/1/pagination.php
  titulo:"<center><h5><span>Arrastra</span> la sílaba donde corresponda.</h5></center>",
} 
document.getElementById("ftitle").innerHTML = dataExercise.titulo;
document.getElementById("boton1").setAttribute("onclick", dataExercise.procesar);
document.getElementById("nextExercise").setAttribute("href", dataExercise.next);
// FIN PLANTILLA - PLANTILLA - PLANTILLA






//COPIAR DEL EJERCICIO del index.html o DEL ARCHIVO validate.js 
//COPIAR DEL EJERCICIO del index.html o DEL ARCHIVO validate.js 
var lb = document.querySelector('#listB');
for (var n = lb.children.length; n >= 0; n--) {
    lb.appendChild(lb.children[Math.random() * n | 0]);
}
var la = document.querySelector('.grid-layout');
for (var i = la.children.length; i >= 0; i--) {
    la.appendChild(la.children[Math.random() * i | 0]);
}

$(".pieza").draggable({
    start: function() {
        element = $(this).attr("alt");
    }
});

var Nda = 0;
var Ndo = 0;
var Nde = 0;
var NdA = 0;
var NdE = 0;

// uno
$("#uno").droppable({
    drop: function(event, ui) {
        $(this).css("background-color", "transparent");
        $(".box").css("background-color", "transparent");
        //  $( this ).target.append(event.target);
        if (element == "da") {
            Nda++
        }
        ui.draggable.draggable("disable", 1);
    }
});
// dos
$("#dos").droppable({
    drop: function(event, ui) {
        $(this).css("background-color", "transparent");
        $(".box").css("background-color", "transparent");
        //  $( this ).target.append(event.target);s
        if (element == "do") {
            Ndo++
        }
        ui.draggable.draggable("disable", 1);
    }
});
//tres
$("#tres").droppable({
    drop: function(event, ui) {
        $(this).css("background-color", "transparent");
        $(".box").css("background-color", "transparent");
        //  $( this ).target.append(event.target);

        if (element == "de") {
            Nde++
        }
        ui.draggable.draggable("disable", 1);
    }
});
//cuatro
$("#cuatro").droppable({
    drop: function(event, ui) {
        $(this).css("background-color", "transparent");
        $(".box").css("background-color", "transparent");
        //  $( this ).target.append(event.target);

        if (element == "da") {
            NdA++
        }
        ui.draggable.draggable("disable", 1);
    }
});
//cinco
$("#cinco").droppable({
    drop: function(event, ui) {
        $(this).css("background-color", "transparent");
        $(".box").css("background-color", "transparent");
        //  $( this ).target.append(event.target);

        if (element == "de") {
            NdE++
        }
        ui.draggable.draggable("disable", 1);
    }
});

function result_tipo_1_2_5() {
     

    if (Nda == 1 && Ndo == 1 && Nde == 1 && NdA == 1 && NdE == 1) {
       
        correcto();
    } else {
        incorrecto();
        
    }

}
//COPIAR DEL EJERCICIO del index.html o DEL ARCHIVO validate.js 
//COPIAR DEL EJERCICIO del index.html o DEL ARCHIVO validate.js 
