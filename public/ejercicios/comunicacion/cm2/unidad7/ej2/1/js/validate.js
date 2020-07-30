//INICIO PLANTILLA - PLANTILLA - PLANTILLA
dataExercise = {
  next: "../2/index.html", // Siguiente ejercicio
  procesar:"result_tipo_2_6_2()", //tal cual esta en la funcion result_tipo_x_x_x() de la parte inferior del archivo index o el archivo validate
  // El titulo tal cual esta en la carpetade paginacion  ejemplo Comunicacion/1/0/1/pagination.php
  titulo:"<center><h5><span>Lee</span> atentamente la siguiente serie y <span>marca</span> la que no  corresponde.</h5></center>",
} 
document.getElementById("ftitle").innerHTML = dataExercise.titulo;
document.getElementById("boton1").setAttribute("onclick", dataExercise.procesar);
document.getElementById("nextExercise").setAttribute("href", dataExercise.next);
// FIN PLANTILLA - PLANTILLA - PLANTILLA

   // Validar

   var r = 0;
   var v = 1;


var cols = document.querySelectorAll('.contenedor-check');

[].forEach.call(cols, (e)=>{

   for (var i = e.children.length; i >= 0; i--) {
       e.appendChild(e.children[Math.random() * i | 0]);
   }

});

   $(".respuesta").click(function(){
       $(this).css({
       "border": "solid",
       "border-color": "#37D3F7",
       "background": "#B6ECFF"
       });
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
       }
   });

   
   

   function result_tipo_2_6_2() {

       if (r == 5) {
           correcto();
       } else {
           incorrecto();
       }

   }