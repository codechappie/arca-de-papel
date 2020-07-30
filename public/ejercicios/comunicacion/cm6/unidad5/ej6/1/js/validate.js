//INICIO PLANTILLA - PLANTILLA - PLANTILLA
dataExercise = {
  next: "../2/index.html", // Siguiente ejercicio
  procesar:"result_tipo_6_4_10()", //tal cual esta en la funcion result_tipo_x_x_x() de la parte inferior del archivo index o el archivo validate
  // El titulo tal cual esta en la carpetade paginacion  ejemplo Comunicacion/1/0/1/pagination.php
  titulo:"<center><h5><span>Clasifica</span> los siguientes elementos dentro de la estructura de la guía turística.</h5></center>",
} //6-2-1
document.getElementById("ftitle").innerHTML = dataExercise.titulo;
document.getElementById("boton1").setAttribute("onclick", dataExercise.procesar);
document.getElementById("nextExercise").setAttribute("href", dataExercise.next);
// FIN PLANTILLA - PLANTILLA - PLANTILLA



r = 0;
arrastre();
listar_random(".alea");

    // Validar
    function result_tipo_6_4_10() {
        
        
        
        

        if (r == 9) {
            console.log(r)
            
            
            correcto();
        } else {
            incorrecto();
            console.log(r)
            
            
        }
    }