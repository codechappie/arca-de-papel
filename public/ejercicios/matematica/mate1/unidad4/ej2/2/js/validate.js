 
let array = [];
let options = '<option value="" disabled selected></option>';


for (let i = 0; i < 50; i++) {
    options += `<option value="${i}">${i}</option>`
}


$('.slc').html(options);


$('select').formSelect();

//INICIO PLANTILLA - PLANTILLA - PLANTILLA
dataExercise = {
  next: "../../../index.html", // Siguiente ejercicio
  procesar:"result_tipo_1_3_8()", //tal cual esta en la funcion result_tipo_x_x_x() de la parte inferior del archivo index o el archivo validate
  // El titulo tal cual esta en la carpetade paginacion  ejemplo Comunicacion/1/0/1/pagination.php
  titulo:"<center><h5><span>Cuenta</span> y <span>escribe</span> el número.</h5></center>",
} 
document.getElementById("ftitle").innerHTML = dataExercise.titulo;
document.getElementById("boton1").setAttribute("onclick", dataExercise.procesar);
document.getElementById("nextExercise").setAttribute("href", dataExercise.next);
// FIN PLANTILLA - PLANTILLA - PLANTILLA

$('select').formSelect();
// Random
var div = document.querySelector('.grid-container');
for (var i = div.children.length; i >= 0; i--) {
    div.appendChild(div.children[Math.random() * i | 0]);
}
// Select
var r = 0;
$(".slc").change(function() {
    slcalt = $(this).attr("alt");
    slcval = $(this).val();
    // console.log(slcalt);
    // console.log(slcval);
    if (slcalt == slcval) {
        r++;
        console.log(r);
    }
});

function result_tipo_1_3_8() {
   

  if (r == 4) {
      
      correcto();
  } else {
      incorrecto();
       
  }

}



//COPIAR DEL EJERCICIO del index.html o DEL ARCHIVO validate.js 
//COPIAR DEL EJERCICIO del index.html o DEL ARCHIVO validate.js 








//COPIAR DEL EJERCICIO del index.html o DEL ARCHIVO validate.js 
//COPIAR DEL EJERCICIO del index.html o DEL ARCHIVO validate.js 
  
