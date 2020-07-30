//INICIO PLANTILLA - PLANTILLA - PLANTILLA
dataExercise = {
  next: "../3/index.html", // Siguiente ejercicio
  procesar:"result_tipo_1_4_7()", //tal cual esta en la funcion result_tipo_x_x_x() de la parte inferior del archivo index o el archivo validate
  // El titulo tal cual esta en la carpetade paginacion  ejemplo Comunicacion/1/0/1/pagination.php
  titulo:"<center><h5><span>Ordena</span> las palabras y forma oraciones.</h5></center>",
} //3-7-15
document.getElementById("ftitle").innerHTML = dataExercise.titulo;
document.getElementById("boton1").setAttribute("onclick", dataExercise.procesar);
document.getElementById("nextExercise").setAttribute("href", dataExercise.next);
// FIN PLANTILLA - PLANTILLA - PLANTILLA




var cols = document.querySelectorAll('.alfabeto');

[].forEach.call(cols, (e) => {

    for (var i = e.children.length; i >= 0; i--) {
        e.appendChild(e.children[Math.random() * i | 0]);
    }

});

function comprobar_listas() {

    correct = '["1","2","3","4","5","6"]';

    $(".alfabeto").each(function() {
        var order = $(this).sortable("toArray");
        order = JSON.stringify(order);
        if (order == correct) {
            r++;
        }
    });
};

var r = 0;
var v = 1;

$(".alfabeto").sortable();
$( ".salfabeto" ).disableSelection();



function result_tipo_3_7_15() {
    
    
    
    

    comprobar_listas();
    console.log(r);

    if (r == 4) {
        
        
        correcto();
    } else {
        incorrecto();
        
        
    }

}