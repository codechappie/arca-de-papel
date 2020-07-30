//INICIO PLANTILLA - PLANTILLA - PLANTILLA
dataExercise = {
  next: "../3/index.html", // Siguiente ejercicio
  procesar:"result_tipo_1_4_7()", //tal cual esta en la funcion result_tipo_x_x_x() de la parte inferior del archivo index o el archivo validate
  // El titulo tal cual esta en la carpetade paginacion  ejemplo Comunicacion/1/0/1/pagination.php
  titulo:"<center><h5><span>Relaciona</span> con líneas las comas con los ejemplos adecuados.</h5></center>",
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

$('.grid-item-a').click(function () {
    var obj1 = null;
    var valor = $(this).attr("value");
    if (valor != 1) {
        var sitio1 = $(this).index();
        $('.grid-item-a').css({
            "background-color": "white",
            "border": "solid 1px silver",
            "box-shadow": "none",
            "z-index": "0"
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
                ctx.moveTo(0, 100);
                break;
            case 1:
                ctx.moveTo(0, 200);
                break;
            case 2:
                ctx.moveTo(0, 160);
                break;
            case 3:
                ctx.moveTo(0, 225);
                break;
            case 4:
                ctx.moveTo(0, 290);
                break;
            case 5:
                ctx.moveTo(0, 350);
                break;
        }
        valor = 1;
    }

    $('.grid-item-b').click(function () {
        var sitio2 = $(this).index();
        $('.grid-item-b').css({ "background-color": "white" });
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
                ctx.lineTo(100, 20);
                break;
            case 1:
                ctx.lineTo(100, 90);
                break;
            case 2:
                ctx.lineTo(100, 160);
                break;
            case 3:
                ctx.lineTo(100, 220);
                break;
            case 4:
                ctx.lineTo(100, 290);
                break;
            case 5:
                ctx.lineTo(100, 350);
                break;
        }
        ctx.strokeStyle = "orange";
        ctx.lineWidth = 3;
        ctx.stroke();

        if (obj1 == obj2) {
            r++;
            console.log(r);
        }
    });
});
function result_tipo_5_3_14() {
    
    
    
    

    if (r == 9) {
        
        
        correcto();
    } else {
        incorrecto();
        
        
    }

}