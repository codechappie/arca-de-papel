//INICIO PLANTILLA - PLANTILLA - PLANTILLA
dataExercise = {
  next: "../../../index.html", // Siguiente ejercicio
  procesar:"result_tipo_2_2_1()", //tal cual esta en la funcion result_tipo_x_x_x() de la parte inferior del archivo index o el archivo validate
  // El titulo tal cual esta en la carpetade paginacion  ejemplo Comunicacion/1/0/1/pagination.php
  titulo:"<center><h5><span>Encuentra</span> en la sopa de letras los antónimos de las siguientes palabras.</h5></center>",
} 
document.getElementById("ftitle").innerHTML = dataExercise.titulo;
document.getElementById("boton1").setAttribute("onclick", dataExercise.procesar);
document.getElementById("nextExercise").setAttribute("href", dataExercise.next);
// FIN PLANTILLA - PLANTILLA - PLANTILLA






//COPIAR DEL EJERCICIO del index.html o DEL ARCHIVO validate.js 
//COPIAR DEL EJERCICIO del index.html o DEL ARCHIVO validate.js 
    var words = ['subir', 'noche', 'limpio', 'caliente', 'alegre', 'norte', 'barato', 'inicio', 'oscuro','mojado'];
    var gamePuzzle = wordfindgame.create(words, '#juego');


    //var C = [~~(Math.random() * 255),~~(Math.random() * 255),~~(Math.random() * 255)];
	//$('.container').append("<div class='elements' style='color:rgb("+C[0]+","+C[1]+","+C[2]+")'>"+String.fromCharCode(i)+"</div>" );

    

    function result_tipo_2_2_1() {
        
        
        
        

        var divs = $(".found").toArray().length;


        console.log(divs);
        if (divs >= 46) {
            
            
            correcto();
        } else {
            incorrecto();
            
            
        }

    }
//COPIAR DEL EJERCICIO del index.html o DEL ARCHIVO validate.js 
//COPIAR DEL EJERCICIO del index.html o DEL ARCHIVO validate.js 
