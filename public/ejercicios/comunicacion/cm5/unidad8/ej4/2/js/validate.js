//INICIO PLANTILLA - PLANTILLA - PLANTILLA
dataExercise = {
  next: "../3/index.html", // Siguiente ejercicio
  procesar:"result_tipo_5_7_11()", //tal cual esta en la funcion result_tipo_x_x_x() de la parte inferior del archivo index o el archivo validate
  // El titulo tal cual esta en la carpetade paginacion  ejemplo Comunicacion/1/0/1/pagination.php
  titulo:"<center><h5><span>Relaciona</span> los tipos de adverbio con el usado en cada oración.</h5></center>",
} 
document.getElementById("ftitle").innerHTML = dataExercise.titulo;
document.getElementById("boton1").setAttribute("onclick", dataExercise.procesar);
document.getElementById("nextExercise").setAttribute("href", dataExercise.next);
// FIN PLANTILLA - PLANTILLA - PLANTILLA

var cols = '.grid-container';
listar_random(cols);

var r = 0;
var canvas = document.getElementById("micanvas");
var ctx = canvas.getContext("2d");
$('.grid-item-a').click(function() {
    var obj1 = null;
    var valor = $(this).attr("value");
    if (valor != 1) {
        var sitio1 = $(this).index();
        $('.grid-item-a').css({
            "background-color": "white"
        });
        $(this).css({
            "background-color": "silver",
            "background-color": "rgba(254, 205, 84, 0.65)",
            "border": "solid white",
            "box-shadow": "0 0 3px black",
            "z-index": "1"
        });
        obj1 = $(this).attr("alt");
        // console.log(obj1);
        ctx.beginPath();
        switch (sitio1) {
            case 0:
                ctx.moveTo(0,55);
                break;
            case 1:
                ctx.moveTo(0,115);
                break;
            case 2:
                ctx.moveTo(0,185);
                break;
            case 3:
                ctx.moveTo(0,260);
                break;
            case 4:
                ctx.moveTo(0,320);
                break;
            case 5:
                ctx.moveTo(0,390);
                break;
            case 6:
                ctx.moveTo(0,465);
                break;
        }
        valor = 1;
    }

    $('.grid-item-b').click(function() {
        var sitio2 = $(this).index();
        $('.grid-item-b').css({
            "background-color": "white"
        });
        $(this).css({
            "background-color": "silver",
            "background-color": "rgba(254, 205, 84, 0.65)",
            "border": "solid white",
            "box-shadow": "0 0 3px black",
            "z-index": "1"
        });

        var obj2 = $(this).attr("alt");
        // console.log(obj2);
        switch (sitio2) {
            case 0:
                ctx.lineTo(100,55);
                break;
            case 1:
                ctx.lineTo(100,115);
                break;
            case 2:
                ctx.lineTo(100,185);
                break;
            case 3:
                ctx.lineTo(100,260);
                break;
            case 4:
                ctx.lineTo(100,320);
                break;
            case 5:
                ctx.lineTo(100,390);
                break;
            case 6:
                ctx.lineTo(100,465);
                break;
        }
        ctx.strokeStyle = "orange";
        ctx.lineWidth = 3;
        ctx.stroke();

        if (obj1 == obj2) {
            r++;
            // console.log(r);
        }
    });
});


function result_tipo_5_7_11() {
    
    
    
    

    if (r == 7) {
        console.log(r)
        
        
        correcto();
    } else {
        console.log(r)
        incorrecto();
        
        
    }
}