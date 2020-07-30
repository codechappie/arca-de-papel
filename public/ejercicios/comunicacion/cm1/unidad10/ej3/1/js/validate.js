//INICIO PLANTILLA - PLANTILLA - PLANTILLA
dataExercise = {
  next: "../2/index.html", // Siguiente ejercicio
  procesar:"result_tipo_1_9_5()", //tal cual esta en la funcion result_tipo_x_x_x() de la parte inferior del archivo index o el archivo validate
  // El titulo tal cual esta en la carpetade paginacion  ejemplo Comunicacion/1/0/1/pagination.php
  titulo:"<center><h5><span>Complete</span> las oraciones con las palabras del recuadro.</h5></center>",
} 
document.getElementById("ftitle").innerHTML = dataExercise.titulo;
document.getElementById("boton1").setAttribute("onclick", dataExercise.procesar);
document.getElementById("nextExercise").setAttribute("href", dataExercise.next);
// FIN PLANTILLA - PLANTILLA - PLANTILLA


var ul = document.querySelector('.grid-container');
for (var i = ul.children.length; i >= 0; i--) {
    ul.appendChild(ul.children[Math.random() * i | 0]);
}
var r = 0;
// Select Materialize
$('select').formSelect();
// Select
var select1 = document.getElementById('select1');
var select2 = document.getElementById('select2');

select1.addEventListener('change',
    function() {
        var selected1 = this.options[select1.selectedIndex];
        if (selected1.value == 'flautista') {
            r++;
        }
    });
select2.addEventListener('change',
    function() {
        var selected2 = this.options[select2.selectedIndex];
        if (selected2.value == 'flúor') {
            r++;
        }
    });

var select3 = document.getElementById('select3');
var select4 = document.getElementById('select4');

select3.addEventListener('change',
    function() {
        var selected3 = this.options[select3.selectedIndex];
        if (selected3.value == 'inflar') {
            r++;
        }
    });
select4.addEventListener('change',
    function() {
        var selected4 = this.options[select4.selectedIndex];
        if (selected4.value == 'flaco') {
            r++;
        }
    });

var select5 = document.getElementById('select5');
// var select6 = document.getElementById('select6');

select5.addEventListener('change',
    function() {
        var selected5 = this.options[select5.selectedIndex];
        if (selected5.value == 'flota') {
            r++;
        }
    });
// select6.addEventListener('change',
//     function() {
//         var selected6 = this.options[select6.selectedIndex];
//         if (selected6.value == 'flota') {
//             r++;
//         }
//     });

function result_tipo_1_9_5() {

    if (r == 5) {
        correcto();
    } else {
        incorrecto();
    }

}