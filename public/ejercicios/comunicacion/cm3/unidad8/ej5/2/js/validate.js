//INICIO PLANTILLA - PLANTILLA - PLANTILLA
dataExercise = {
  next: "../3/index.html", // Siguiente ejercicio
  procesar:"result_tipo_3_7_9()", //tal cual esta en la funcion result_tipo_x_x_x() de la parte inferior del archivo index o el archivo validate
  // El titulo tal cual esta en la carpetade paginacion  ejemplo Comunicacion/1/0/1/pagination.php
  titulo:"<center><h5><span>Arrastra</span> la sílaba que completa cada nombre.</h5></center>",
} //3-7-9
document.getElementById("ftitle").innerHTML = dataExercise.titulo;
document.getElementById("boton1").setAttribute("onclick", dataExercise.procesar);
document.getElementById("nextExercise").setAttribute("href", dataExercise.next);
// FIN PLANTILLA - PLANTILLA - PLANTILLA




var r = 0;

var cols = document.querySelectorAll('.ejercicio');

[].forEach.call(cols, (e) => {

    for (var i = e.children.length; i >= 0; i--) {
        e.appendChild(e.children[Math.random() * i | 0]);
    }

});
// Validar
function result_tipo_3_7_9() {
    
    
    
    

    $("select").each(function() {
        if ($(this).attr("alt") == $(this).val()) {
            r++;
        }
    });

    if (r == 12) {
        
        
        correcto();
    } else {
        incorrecto();
        
        
    }

}