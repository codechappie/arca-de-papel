 
//INICIO PLANTILLA - PLANTILLA - PLANTILLA
dataExercise = {
  next: "../5/index.html", // Siguiente ejercicio
  procesar:"result_tipo_1_4_14()", //tal cual esta en la funcion result_tipo_x_x_x() de la parte inferior del archivo index o el archivo validate
  // El titulo tal cual esta en la carpetade paginacion  ejemplo Comunicacion/1/0/1/pagination.php
  titulo:"<center><h5><span>Selecciona</span> correctamente el recuadro que indica la mitad de cada número.</h5></center>",
} 
document.getElementById("ftitle").innerHTML = dataExercise.titulo;
document.getElementById("boton1").setAttribute("onclick", dataExercise.procesar);
document.getElementById("nextExercise").setAttribute("href", dataExercise.next);
// FIN PLANTILLA - PLANTILLA - PLANTILLA



var cols = document.querySelectorAll('.options, .grid-preguntas');
// console.log(cols);
[].forEach.call(cols, (e)=>{
    for (var i = e.children.length; i >= 0; i--) {
        e.appendChild(e.children[Math.random() * i | 0]);
    }
});
// checked
var r = 0;
$('.optn').click(function() {
    $(this).attr("disabled","disabled");
    var element = $(this).attr("alt");
    var select = $(this).attr("value");
    if (select != "seleccionado") {
        if (element == "n") {
            r++;
            $(this).attr("value", "seleccionado");
        } else {
            r--;
            $(this).attr("value", "seleccionado");
        }
        console.log(r);
    }
})



//COPIAR DEL EJERCICIO del index.html o DEL ARCHIVO validate.js 
//COPIAR DEL EJERCICIO del index.html o DEL ARCHIVO validate.js 



function result_tipo_1_4_14() {
   
  if (r == 6) {
       
      correcto();
  } else {
      incorrecto();
       
  }

}




//COPIAR DEL EJERCICIO del index.html o DEL ARCHIVO validate.js 
//COPIAR DEL EJERCICIO del index.html o DEL ARCHIVO validate.js 
  
