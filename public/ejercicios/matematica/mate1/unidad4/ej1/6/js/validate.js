 
let array = [];
let optionsd = '<option value="" disabled selected></option>';
let optionsu = '<option value="" disabled selected></option>';


for (let i = 1; i < 10; i++) {
    optionsd += `<option value="${i}">${i}D</option>`
}
for (let i = 1; i < 10; i++) {
    optionsu += `<option value="${i}">${i}U</option>`
}


$('.dec').html(optionsd);
$('.uni').html(optionsu);


$('select').formSelect();

//INICIO PLANTILLA - PLANTILLA - PLANTILLA
dataExercise = {
  next: "../../../index.html", // Siguiente ejercicio
  procesar:"result_tipo_1_3_6()", //tal cual esta en la funcion result_tipo_x_x_x() de la parte inferior del archivo index o el archivo validate
  // El titulo tal cual esta en la carpetade paginacion  ejemplo Comunicacion/1/0/1/pagination.php
  titulo:"<center><h5><span>Realiza</span> la descomposición de los suiguientes números indicando de cada uno el valor en unidades. <span>Guíate</span> del ejemplo.</h5></center>",
} 
document.getElementById("ftitle").innerHTML = dataExercise.titulo;
document.getElementById("boton1").setAttribute("onclick", dataExercise.procesar);
document.getElementById("nextExercise").setAttribute("href", dataExercise.next);
// FIN PLANTILLA - PLANTILLA - PLANTILLA






//COPIAR DEL EJERCICIO del index.html o DEL ARCHIVO validate.js 
//COPIAR DEL EJERCICIO del index.html o DEL ARCHIVO validate.js 




$('select').formSelect();
// Random
// var div = document.querySelector('.grid-container');
// for (var i = div.children.length; i >= 0; i--) {
//     div.appendChild(div.children[Math.random() * i | 0]);
// }
// Select
var r = 0;
$(".slc").change(function() {
    slcalt = $(this).attr("alt");
    slcval = $(this).val();
    console.log(slcalt);
    console.log(slcval);
    if (slcalt == slcval) {
        r++;
        console.log(r);
    }
});

function result_tipo_1_3_6() {
   

  if (r == 8) {
      
      correcto();
  } else {
      incorrecto();
       
  }

}


//COPIAR DEL EJERCICIO del index.html o DEL ARCHIVO validate.js 
//COPIAR DEL EJERCICIO del index.html o DEL ARCHIVO validate.js 
  
