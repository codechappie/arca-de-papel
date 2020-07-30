//INICIO PLANTILLA - PLANTILLA - PLANTILLA
dataExercise = {
  next: "../../../index.html", // Siguiente ejercicio
  procesar:"result_tipo_1_3_6()", //tal cual esta en la funcion result_tipo_x_x_x() de la parte inferior del archivo index o el archivo validate
  // El titulo tal cual esta en la carpetade paginacion  ejemplo Comunicacion/1/0/1/pagination.php
  titulo:"<center><h5><span>Completa</span> con <span>ba, bu, bo, be</span>.</h5></center>",
} 
document.getElementById("ftitle").innerHTML = dataExercise.titulo;
document.getElementById("boton1").setAttribute("onclick", dataExercise.procesar);
document.getElementById("nextExercise").setAttribute("href", dataExercise.next);
// FIN PLANTILLA - PLANTILLA - PLANTILLA






//COPIAR DEL EJERCICIO del index.html o DEL ARCHIVO validate.js 
//COPIAR DEL EJERCICIO del index.html o DEL ARCHIVO validate.js 
var ba = 0;
var bo = 0;

var la = document.querySelector('#listA');
for (var i = la.children.length; i >= 0; i--) {
    la.appendChild(la.children[Math.random() * i | 0]);
}
var ul = document.querySelector('.contenedor-silabas');
for (var i = ul.children.length; i >= 0; i--) {
    ul.appendChild(ul.children[Math.random() * i | 0]);
}

$(".pieza").draggable({
    start: function() {
        element = $(this).attr("alt");
    }
});

// 1
$("#1").droppable({

    drop: function(event, ui) {
        $(".pieza h4").css("background-color", "#B6ECFF");
        if (element == "ba") {
            ba++
            //console.log(bo);
        }
        ui.draggable.draggable("disable", 1);
    }
});

// 2
$("#2").droppable({

    drop: function(event, ui) {
        $(".pieza h4").css("background-color", "#B6ECFF");
        if (element == "bo") {
            bo++
            //console.log(bo);
        }
        ui.draggable.draggable("disable", 1);
    }
});

// 3
$("#3").droppable({

    drop: function(event, ui) {
        $(".pieza h4").css("background-color", "#B6ECFF");
        if (element == "ba") {
            ba++
        }
        ui.draggable.draggable("disable", 1);
    }
});


function result_tipo_1_3_6() {
    
    
    
    

    if (ba == 2 && bo == 1) {
        
        
        correcto();
    } else {
        incorrecto();
        
        
    }

}
//COPIAR DEL EJERCICIO del index.html o DEL ARCHIVO validate.js 
//COPIAR DEL EJERCICIO del index.html o DEL ARCHIVO validate.js 
