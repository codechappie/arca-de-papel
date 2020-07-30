//INICIO PLANTILLA - PLANTILLA - PLANTILLA
dataExercise = {
  next: "../2/index.html", // Siguiente ejercicio
  procesar:"result_tipo_1_2_2()", //tal cual esta en la funcion result_tipo_x_x_x() de la parte inferior del archivo index o el archivo validate
  // El titulo tal cual esta en la carpetade paginacion  ejemplo Comunicacion/1/0/1/pagination.php
  titulo:"<center><h5><span>Lee</span> atentamente y <span>responde</span> las preguntas.</h5></center>",
} 
document.getElementById("ftitle").innerHTML = dataExercise.titulo;
document.getElementById("boton1").setAttribute("onclick", dataExercise.procesar);
document.getElementById("nextExercise").setAttribute("href", dataExercise.next);
// FIN PLANTILLA - PLANTILLA - PLANTILLA






//COPIAR DEL EJERCICIO del index.html o DEL ARCHIVO validate.js 
//COPIAR DEL EJERCICIO del index.html o DEL ARCHIVO validate.js 
var r = 0;
var ta = 0;
var te = 0;
var ti = 0;
var to = 0;
var to2 = 0;
var tu = 0;

var ul = document.querySelector('.contenedor-silabas');
for (var i = ul.children.length; i >= 0; i--) {
    ul.appendChild(ul.children[Math.random() * i | 0]);
}

$(".pieza").draggable({
    start: function() {
        element = $(this).attr("id");
    }
});

// ta
$("#ta").droppable({

    drop: function(event, ui) {
        $("#" + element + " h4").css("background-color", "transparent");
        if (element == "taa") {
            ta++
        }
        ui.draggable.draggable("disable", 1);
    }
});

// te
$("#te").droppable({

    drop: function(event, ui) {
        $("#" + element + " h4").css("background-color", "transparent");
        if (element == "tee") {
            te++
        }
        ui.draggable.draggable("disable", 1);
    }
});

// ti
$("#ti").droppable({

    drop: function(event, ui) {
        $(this).css("background-color", "transparent");
        $("#" + element + " h4").css("background-color", "transparent");
        if (element == "tii") {
            ti++
        }
        ui.draggable.draggable("disable", 1);
    }
});

// to
$("#to").droppable({

    drop: function(event, ui) {
        $(this).css("background-color", "transparent");
        $("#" + element + " h4").css("background-color", "transparent");
        if (element == "too" || element == "too2") {
            to++
        }
        ui.draggable.draggable("disable", 1);
    }
});

// to2
$("#to2").droppable({

    drop: function(event, ui) {
        $(this).css("background-color", "transparent");
        $("#" + element + " h4").css("background-color", "transparent");

        if (element == "too" || element == "too2") {
            to2++
        }
        ui.draggable.draggable("disable", 1);
    }
});

// tu
$("#tu").droppable({

    drop: function(event, ui) {
        $(this).css("background-color", "transparent");
        $("#" + element + " h4").css("background-color", "transparent");

        if (element == "tu") {
            to2++
        }
        ui.draggable.draggable("disable", 1);
    }
});

 function result_tipo_1_2_2(){               
         var  min= $('#Minutos').text();
         var  seg= $('#Segundos').text();
         var  milseg= $('#Centesimas').text();
         var tiempo=min+":"+seg+":"+milseg;



                 if(r==0){                  
                     
                     
                     correcto(); 
                 }
                 else{
                     incorrecto();
                   
                     localStorage.setItem("Time<?=$cod?>", tiempo);
                 }    
         
             }
//COPIAR DEL EJERCICIO del index.html o DEL ARCHIVO validate.js 
//COPIAR DEL EJERCICIO del index.html o DEL ARCHIVO validate.js 
