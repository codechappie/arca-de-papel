
dataExercise = {
  next: "../../../", 
  procesar:"result_tipo_2_6_4()",
  titulo:"<center><h5><span>Selecciona</span> la palabra que no corresponda a la serie.</h5></center>",
} 
document.getElementById("ftitle").innerHTML = dataExercise.titulo;
document.getElementById("boton1").setAttribute("onclick", dataExercise.procesar);
document.getElementById("nextExercise").setAttribute("href", dataExercise.next);
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

   
   

   function result_tipo_2_6_4() {

       if (r == 5) {
           correcto();
       } else {
           incorrecto();
       }

   }