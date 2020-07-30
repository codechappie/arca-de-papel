 
//INICIO PLANTILLA - PLANTILLA - PLANTILLA
dataExercise = {
  next: "../4/index.html", // Siguiente ejercicio
  procesar:"result_tipo_1_2_3()", //tal cual esta en la funcion result_tipo_x_x_x() de la parte inferior del archivo index o el archivo validate
  // El titulo tal cual esta en la carpetade paginacion  ejemplo Comunicacion/1/0/1/pagination.php
  titulo:"<center><h5><span>Rodea</span> 10 elementos y <span>completa.</span></h5></center>",
} 
document.getElementById("ftitle").innerHTML = dataExercise.titulo;
document.getElementById("boton1").setAttribute("onclick", dataExercise.procesar);
document.getElementById("nextExercise").setAttribute("href", dataExercise.next);
// FIN PLANTILLA - PLANTILLA - PLANTILLA






//COPIAR DEL EJERCICIO del index.html o DEL ARCHIVO validate.js 
//COPIAR DEL EJERCICIO del index.html o DEL ARCHIVO validate.js 

var r = 0;
// Select Materialize
$('select').formSelect();
// Select
var select1 = document.getElementById('select1');
var select2 = document.getElementById('select2');
var select3 = document.getElementById('select3');
var select4 = document.getElementById('select4');

select1.addEventListener('change',
    function() {
        var selected1 = this.options[select1.selectedIndex];
        // console.log(selected1.value);
        if (selected1.value == 1) {
            r++;
            // console.log(r);
        }
    });
select2.addEventListener('change',
    function() {
        var selected2 = this.options[select2.selectedIndex];
        // console.log(selected2.value);
        if (selected2.value == 2) {
            r++;
            // console.log(r);
        }
    });
select3.addEventListener('change',
    function() {
        var selected3 = this.options[select3.selectedIndex];
        // console.log(selected2.value);
        if (selected3.value == 1) {
            r++;
            // console.log(r);
        }
    });
select4.addEventListener('change',
    function() {
        var selected4 = this.options[select4.selectedIndex];
        // console.log(selected2.value);
        if (selected4.value == 7) {
            r++;
            // console.log(r);
        }
    });

    function result_tipo_1_2_3() {
      
      if (r == 4) {
           
          correcto();
      } else {
          incorrecto();
           
      }
  
  }




//COPIAR DEL EJERCICIO del index.html o DEL ARCHIVO validate.js 
//COPIAR DEL EJERCICIO del index.html o DEL ARCHIVO validate.js 
  
