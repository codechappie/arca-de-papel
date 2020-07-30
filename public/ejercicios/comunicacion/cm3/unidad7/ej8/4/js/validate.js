//INICIO PLANTILLA - PLANTILLA - PLANTILLA
dataExercise = {
  next: "../2/index.html", // Siguiente ejercicio
  procesar:"result_tipo_3_6_25()", //tal cual esta en la funcion result_tipo_x_x_x() de la parte inferior del archivo index o el archivo validate
  // El titulo tal cual esta en la carpetade paginacion  ejemplo Comunicacion/1/0/1/pagination.php
  titulo:"<center><h5><span>Ordena</span> los hechos según pasaron en la historia.</h5></center>",
} //3-6-25
document.getElementById("ftitle").innerHTML = dataExercise.titulo;
document.getElementById("boton1").setAttribute("onclick", dataExercise.procesar);
document.getElementById("nextExercise").setAttribute("href", dataExercise.next);
// FIN PLANTILLA - PLANTILLA - PLANTILLA


var r = 0;
var v = 1;

$("#alfabeto").sortable();
$( "#salfabeto" ).disableSelection();

var ul = document.querySelector('#alfabeto');
for (var i = ul.children.length; i >= 0; i--) {
    ul.appendChild(ul.children[Math.random() * i | 0]);
}

function result_tipo_3_6_25() {
    
    
    
    

    var order = $("#alfabeto").sortable("toArray");
    order = JSON.stringify(order);

    correct = '["1","2","3","4"]';


    if (order == correct) {
        
        
        correcto();
    } else {
        incorrecto();
        
        
    }

}