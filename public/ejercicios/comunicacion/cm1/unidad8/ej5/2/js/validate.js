//INICIO PLANTILLA - PLANTILLA - PLANTILLA
dataExercise = {
  next: "../3/index.html", // Siguiente ejercicio
  procesar:"result_tipo_1_7_16()", //tal cual esta en la funcion result_tipo_x_x_x() de la parte inferior del archivo index o el archivo validate
  // El titulo tal cual esta en la carpetade paginacion  ejemplo Comunicacion/1/0/1/pagination.php
  titulo:"<center><h5><span>Indica</span> qué está haciendo cada personaje.</h5></center>",
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
        if (selected1.value == 'juega') {
            r++;
        }
    });
select2.addEventListener('change',
    function() {
        var selected2 = this.options[select2.selectedIndex];
        if (selected2.value == 'duerme') {
            r++;
        }
    });

var select3 = document.getElementById('select3');
var select4 = document.getElementById('select4');

select3.addEventListener('change',
    function() {
        var selected3 = this.options[select3.selectedIndex];
        if (selected3.value == 'infla') {
            r++;
        }
    });
select4.addEventListener('change',
    function() {
        var selected4 = this.options[select4.selectedIndex];
        if (selected4.value == 'estudia') {
            r++;
        }
    });


    function result_tipo_1_7_16() {
    
        if (r == 4) {
            correcto();
        } else {
            incorrecto();
        }
    
    }