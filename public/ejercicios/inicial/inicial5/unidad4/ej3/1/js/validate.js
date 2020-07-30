//INICIO PLANTILLA - PLANTILLA - PLANTILLA
dataExercise = {
  next: "../../../index.html", // Siguiente ejercicio
  procesar:"result_tipo_5_1_3()", //tal cual esta en la funcion result_tipo_x_x_x() de la parte inferior del archivo index o el archivo validate
  // El titulo tal cual esta en la carpetade paginacion  ejemplo Comunicacion/1/0/1/pagination.php
  titulo:"<center><h5><span>Ordena</span> las cajas de las más pequeña a la más grande.</h5></center>",
} 
document.getElementById("ftitle").innerHTML = dataExercise.titulo;
document.getElementById("boton1").setAttribute("onclick", dataExercise.procesar);
document.getElementById("nextExercise").setAttribute("href", dataExercise.next);
// FIN PLANTILLA - PLANTILLA - PLANTILLA






//COPIAR DEL EJERCICIO del index.html o DEL ARCHIVO validate.js 
//COPIAR DEL EJERCICIO del index.html o DEL ARCHIVO validate.js 
/**
 * TODO: Random
 */
var cols = document.querySelectorAll('#sortable');
[].forEach.call(cols, (e) => {
    for (var i = e.children.length; i >= 0; i--) {
        e.appendChild(e.children[Math.random() * i | 0]);
    }
});
/**
 * TODO: Orden
 */
$(function () {
    $("#sortable").sortable({
        revert: "invalid",
    });
    $("#draggable").draggable({
        connectToSortable: "#sortable",
        helper: "clone",
        revert: "invalid",
    });
    // $("ul, li").disableSelection();
});
function sortItems() {
    var items = $('#sortable .grid-item').get(); items.sort(function (a, b) { return parseInt(a.id) > parseInt(b.id); });
    
};
function result_tipo_5_1_3() {
  var min = $('#Minutos').text();
  var seg = $('#Segundos').text();
  var milseg = $('#Centesimas').text();
  var tiempo = min + ":" + seg + ":" + milseg;

  // Sortable
  var items = $('#sortable .grid-item').map(function() {
      return $.trim($(this).attr('id'));
  }).get();
  var itsort = $('#sortable .grid-item').map(function() {
      return $.trim($(this).attr('id'));
  }).get();
  itsort.sort();

  var itemD = JSON.stringify(items);
  var itemO = JSON.stringify(itsort);
  console.log(itemD)
  console.log(itemO)
  // Sortable
  
  if (itemD == itemO) {
      
      correcto()
  } else {
      incorrecto();
       
  }
}