//INICIO PLANTILLA - PLANTILLA - PLANTILLA
dataExercise = {
    next: "../../../index.html", // Siguiente ejercicio
    procesar: "result_tipo_2_2_22()", //tal cual esta en la funcion result_tipo_x_x_x() de la parte inferior del archivo index o el archivo validate
    // El titulo tal cual esta en la carpetade paginacion  ejemplo Comunicacion/1/0/1/pagination.php
    titulo: "<center><h5><span>Selecciona</span> la vocal correcta con la que comienza cada palabra.</h5></center>",
}
document.getElementById("ftitle").innerHTML = dataExercise.titulo;
document.getElementById("boton1").setAttribute("onclick", dataExercise.procesar);
document.getElementById("nextExercise").setAttribute("href", dataExercise.next);
// FIN PLANTILLA - PLANTILLA - PLANTILLA



//COPIAR DEL EJERCICIO del index.html o DEL ARCHIVO validate.js 
//COPIAR DEL EJERCICIO del index.html o DEL ARCHIVO validate.js 

var rpta = 0, otros = 0, element, element2;

    $(".obj").draggable({
        revert: false,
        start: function() {
            element=$(this).attr("data-value"); 
        },
        // finish: function(){
        //     $(this).css("box-shadow","none");
        // }
        
    });
    $( ".droppable" ).droppable({
      classes: {
        "ui-droppable-active": "",
        "ui-droppable-hover": "hover"
      },
      drop: function( event, ui ) {
        element2 = $(this).attr("data-value");
        item = $(this).attr("alt");
        $(this).css("background-color", "rgb(33, 150, 243)");
        

        if(element == element2 || element == item ){
          rpta++;
          console.log(element2)
        }else{
          otros++;
        }
        ui.draggable.draggable("disable", 1);
      }
    });

function result_tipo_2_2_22() {

    if (rpta == 10) {
        correcto();

    } else {
        incorrecto();
    }
}

var cols = document.querySelectorAll('.aleatorio');

[].forEach.call(cols, (e) => {

    for (var i = e.children.length; i >= 0; i--) {
        e.appendChild(e.children[Math.random() * i | 0]);
    }

});

//COPIAR DEL EJERCICIO del index.html o DEL ARCHIVO validate.js
//COPIAR DEL EJERCICIO del index.html o DEL ARCHIVO validate.js 
