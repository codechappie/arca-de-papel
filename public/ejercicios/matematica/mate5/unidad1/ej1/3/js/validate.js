//INICIO PLANTILLA - PLANTILLA - PLANTILLA
dataExercise = {
  next: "https://www.google.com", // Siguiente ejercicio
  procesar: "result_tipo_1_0_3()", //tal cual esta en la funcion result_tipo_x_x_x() de la parte inferior del archivo index o el archivo validate
  // El titulo tal cual esta en la carpetade paginacion  ejemplo Comunicacion/1/0/1/pagination.php
  titulo: "<center><h5><span>Selecciona</span> los dibujos que lleven la vocal A.</h5></center>",
}
document.getElementById("ftitle").innerHTML = dataExercise.titulo;
document.getElementById("boton1").setAttribute("onclick", dataExercise.procesar);
document.getElementById("nextExercise").setAttribute("href", dataExercise.next);
// FIN PLANTILLA - PLANTILLA - PLANTILLA




var r = 0;

var ul = document.querySelector('#listA');
for (var i = ul.children.length; i >= 0; i--) {
  ul.appendChild(ul.children[Math.random() * i | 0]);
}
var ul = document.querySelector('#listB');
for (var i = ul.children.length; i >= 0; i--) {
  ul.appendChild(ul.children[Math.random() * i | 0]);
}
var r = 0;
$('.a').click(function () {

  $(this).css({ "border": "solid", "border-color": "#37D3F7", "background": "#B6ECFF" });
  var element = $(this).attr("alt");
  var select = $(this).attr("value");
  if (select != "seleccionado") {

    if (element == "n") {
      r++;
      $(this).attr("value", "seleccionado");
    }
    else {
      r--;
      $(this).attr("value", "seleccionado");
    }
    console.log(r);
  }
})

function result_tipo_1_0_3() {

  if (r == 6) {
    correcto();
  }
  else {
    incorrecto();
  }

}