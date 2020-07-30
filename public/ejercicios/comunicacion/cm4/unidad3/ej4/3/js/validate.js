//INICIO PLANTILLA - PLANTILLA - PLANTILLA
dataExercise = {
  next: "../4/index.html", // Siguiente ejercicio
  procesar:"result_tipo_4_2_12()", //tal cual esta en la funcion result_tipo_x_x_x() de la parte inferior del archivo index o el archivo validate
  // El titulo tal cual esta en la carpetade paginacion  ejemplo Comunicacion/1/0/1/pagination.php
  titulo:"<center><h5><span>Lee</span> la pregunta y <span>selecciona</span> la respuesta correcta.</h5></center>",
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

var canvas = document.getElementById("micanvas");
var ctx = canvas.getContext("2d");

$('.a').click(function() {
    var obj1 = null;
    var obj2 = null;
    var valor = $(this).attr("value");
    if (valor != 1) {
        var sitio1 = $(this).index();
        $('.a').css({
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
        console.log(obj1);
        ctx.beginPath();
        switch (sitio1) {
            case 0:
                ctx.moveTo(138, 0);
                break;
            case 1:
                ctx.moveTo(414, 0);
                break;
            case 2:
                ctx.moveTo(690, 0);
                break;
            case 3:
                ctx.moveTo(966, 0);
                break;
            case 4:
                ctx.moveTo(1242, 0);
                break;
        }
        valor = 1;
    }

    $('.b').click(function() {

        var sitio2 = $(this).index();
        $('.b').css({
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
        console.log(obj2);
        switch (sitio2) {
            case 0:
                ctx.lineTo(138, 100);
                break;
            case 1:
                ctx.lineTo(414, 100);
                break;
            case 2:
                ctx.lineTo(690, 100);
                break;
            case 3:
                ctx.lineTo(966, 100);
                break;
            case 4:
                ctx.lineTo(1242, 100);
                break;
        }
        ctx.strokeStyle = "orange";
        ctx.lineWidth = 5;
        ctx.stroke();




        if (obj1 == obj2) {
            r++;
            console.log(r);
        }
    });
});

function result_tipo_4_2_12() {
    
    
    
    

    if (r == 4) {
        
        
        correcto();
    } else {
        incorrecto();
        
        
    }
}