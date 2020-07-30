//INICIO PLANTILLA - PLANTILLA - PLANTILLA
dataExercise = {
  next: "../3/index.html", // Siguiente ejercicio
  procesar:"result_tipo_3_8_5()", //tal cual esta en la funcion result_tipo_x_x_x() de la parte inferior del archivo index o el archivo validate
  // El titulo tal cual esta en la carpetade paginacion  ejemplo Comunicacion/1/0/1/pagination.php
  titulo:"<center><h5><span>Arrastra</span> el artículo que corresponda con la imagen.</h5></center>",
} 
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

    var cont = 1;
    correct = '["1","2","3","4","5","6","7","8"]';

    $(".alfabeto").each(function() {

        var order = $(this).sortable("toArray");
        order = JSON.stringify(order);
        console.log("afuera: " + order);
        console.log("afuera: " + correct);
        if (cont == 1) {
            console.log(order);
            console.log(correct);
            if (order == correct || order == '["1","2","3","4","5","8","7","6"]') {
                r++;
            }
        } else {
            if (order == correct) {
                r++;
            }
        }
        cont++;
        console.log(r);
    });
};
var r = 0;
var v = 1;

$(".alfabeto").sortable();
$( ".salfabeto" ).disableSelection();



function result_tipo_3_8_5() {
    
    
    
    

    comprobar_listas();

    if (r == 4) {
        
        
        correcto();
    } else {
        incorrecto();
        
        
    }

}