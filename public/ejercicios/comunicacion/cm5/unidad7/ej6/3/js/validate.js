//INICIO PLANTILLA - PLANTILLA - PLANTILLA
dataExercise = {
  next: "../2/index.html", // Siguiente ejercicio
  procesar:"result_tipo_5_6_18()", //tal cual esta en la funcion result_tipo_x_x_x() de la parte inferior del archivo index o el archivo validate
  // El titulo tal cual esta en la carpetade paginacion  ejemplo Comunicacion/1/0/1/pagination.php
  titulo:"<center><h5><span>Identifica</span> el tipo de texto expositivo y completa la tabla.</h5></center>",
} 
document.getElementById("ftitle").innerHTML = dataExercise.titulo;
document.getElementById("boton1").setAttribute("onclick", dataExercise.procesar);
document.getElementById("nextExercise").setAttribute("href", dataExercise.next);
// FIN PLANTILLA - PLANTILLA - PLANTILLA




var r = 0;
arrastre();
listar_random(".alea");

function result_tipo_5_6_18() {
    
    
    
    

    if (r == 7) {
        console.log(r)
        
        
        correcto();
    } else {
        incorrecto();
        console.log(r)
        
        
    }

}