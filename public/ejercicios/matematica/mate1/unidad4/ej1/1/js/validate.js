 
let array = [];
let options = '<option value="" disabled selected></option>';


for (let i = 1; i < 21; i++) {
    options += `<option value="${i}">${i}</option>`
}


$('.numbers').html(options);


$('select').formSelect();



//INICIO PLANTILLA - PLANTILLA - PLANTILLA
dataExercise = {
  next: "../2/index.html", // Siguiente ejercicio
  procesar:"result_tipo_1_3_1()", //tal cual esta en la funcion result_tipo_x_x_x() de la parte inferior del archivo index o el archivo validate
  // El titulo tal cual esta en la carpetade paginacion  ejemplo Comunicacion/1/0/1/pagination.php
  titulo:"<center><h5><span>Realiza</span> la descomposición de los siguientes números en decenas y unidades.</h5></center>",
} 
document.getElementById("ftitle").innerHTML = dataExercise.titulo;
document.getElementById("boton1").setAttribute("onclick", dataExercise.procesar);
document.getElementById("nextExercise").setAttribute("href", dataExercise.next);
// FIN PLANTILLA - PLANTILLA - PLANTILLA






//COPIAR DEL EJERCICIO del index.html o DEL ARCHIVO validate.js 
//COPIAR DEL EJERCICIO del index.html o DEL ARCHIVO validate.js 




$('select').formSelect();
// Random
var div = document.querySelector('.tabla');
for (var i = div.children.length; i >= 0; i--) {
    div.appendChild(div.children[Math.random() * i | 0]);
}
// Select
var r = 0;
$("#slc1").change(function() { if ($(this).val() == 1) { r++; } });
$("#slc2").change(function() { if ($(this).val() == 9) { r++; } });
$("#slc3").change(function() { if ($(this).val() == 4) { r++; } });
$("#slc4").change(function() { if ($(this).val() == 9) { r++; } });
$("#slc5").change(function() { if ($(this).val() == 3) { r++; } });
$("#slc6").change(function() { if ($(this).val() == 7) { r++; } });
$("#slc7").change(function() { if ($(this).val() == 4) { r++; } });
$("#slc8").change(function() { if ($(this).val() == 2) { r++; } });
$("#slc9").change(function() { if ($(this).val() == 2) { r++; } });
$("#slc10").change(function() { if ($(this).val() == 7) { r++; } });
$("#slc11").change(function() { if ($(this).val() == 3) { r++; } });
$("#slc12").change(function() { if ($(this).val() == 5) { r++; } });
// $("#slc13").change(function() { if ($(this).val() == 3) { r++; } });
// $("#slc14").change(function() { if ($(this).val() == 3) { r++; } });
// $("#slc15").change(function() { if ($(this).val() == 6) { r++; } });
// $("#slc16").change(function() { if ($(this).val() == 5) { r++; } });
// $("#slc17").change(function() { if ($(this).val() == 4) { r++; } });
// $("#slc18").change(function() { if ($(this).val() == 9) { r++; } });



//COPIAR DEL EJERCICIO del index.html o DEL ARCHIVO validate.js 
//COPIAR DEL EJERCICIO del index.html o DEL ARCHIVO validate.js 
function result_tipo_1_3_1() {
   

  if (r == 12) {
     
      correcto();
  } else {
      incorrecto();
       
  }

}
  
