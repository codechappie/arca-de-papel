//INICIO PLANTILLA - PLANTILLA - PLANTILLA
dataExercise = {
  next: "../4/index.html", // Siguiente ejercicio
  procesar:"result_tipo_1_4_7()", //tal cual esta en la funcion result_tipo_x_x_x() de la parte inferior del archivo index o el archivo validate
  // El titulo tal cual esta en la carpetade paginacion  ejemplo Comunicacion/1/0/1/pagination.php
  titulo:"<center><h5><span>Lee</span> la oración y coloca las comas que faltan.</h5></center>",
} 
document.getElementById("ftitle").innerHTML = dataExercise.titulo;
document.getElementById("boton1").setAttribute("onclick", dataExercise.procesar);
document.getElementById("nextExercise").setAttribute("href", dataExercise.next);
// FIN PLANTILLA - PLANTILLA - PLANTILLA






//COPIAR DEL EJERCICIO del index.html o DEL ARCHIVO validate.js 
//COPIAR DEL EJERCICIO del index.html o DEL ARCHIVO validate.js 
var ul = document.querySelector('#listA');
for (var i = ul.children.length; i >= 0; i--) {
    ul.appendChild(ul.children[Math.random() * i | 0]);
}
var ul = document.querySelector('#listB');
for (var i = ul.children.length; i >= 0; i--) {
    ul.appendChild(ul.children[Math.random() * i | 0]);
}

var ul = document.querySelector('#listC');
for (var i = ul.children.length; i >= 0; i--) {
    ul.appendChild(ul.children[Math.random() * i | 0]);
}

$('#canvas_1').attr({
    "width": "170",
    "height": "256"
});
$('#canvas_2').attr({
    "width": "170",
    "height": "256"
});

var objeto_canvas_1 = $('#canvas_1');
if ($(objeto_canvas_1)[0].getContext)
    var contexto_canvas_1 = $(objeto_canvas_1)[0].getContext('2d');

var objeto_canvas_2 = $('#canvas_2');
if ($(objeto_canvas_2)[0].getContext)
    var contexto_canvas_2 = $(objeto_canvas_2)[0].getContext('2d');

var r = 0;

$('.a').click(function() {
    var obj1 = null;
    var valor = $(this).attr('value');
    // Inicio if
    if (valor !== 1) {
        var site1 = $(this).index();
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
        obj1 = $(this).attr('alt');
        // Inicio BeginPath 1
        contexto_canvas_1.beginPath();
        // Inicio Switch 
        switch (site1) {
            case 0:
                contexto_canvas_1.moveTo(0, 32);
                break;
            case 1:
                contexto_canvas_1.moveTo(0, 96);
                break;
            case 2:
                contexto_canvas_1.moveTo(0, 160);
                break;
            case 3:
                contexto_canvas_1.moveTo(0, 224);
                break;
        }
        // Fin Switch
        valor = 1;
        // console.log(r);

        // Inicio Click .b
        $('.b').click(function() {
            var site2 = $(this).index();
            $('.b').css({
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
            // Inicio BeginPath 2
            contexto_canvas_2.beginPath();
            obj2 = $(this).attr("alt");
            // Inicio Switch
            switch (site2) {
                case 0:
                    contexto_canvas_1.lineTo(180, 32);
                    contexto_canvas_2.moveTo(0, 32);
                    break;
                case 1:
                    contexto_canvas_1.lineTo(180, 96);
                    contexto_canvas_2.moveTo(0, 96);
                    break;
                case 2:
                    contexto_canvas_1.lineTo(180, 160);
                    contexto_canvas_2.moveTo(0, 160);
                    break;
                case 3:
                    contexto_canvas_1.lineTo(180, 224);
                    contexto_canvas_2.moveTo(0, 224);
                    break;
            }
            // Fin Switch
            // console.log(site2);
            contexto_canvas_1.strokeStyle = "rgb(127, 27, 91)";
            contexto_canvas_1.lineWidth = 4;
            contexto_canvas_1.stroke();
            // Fin Stroke 1
            // Inicio Click .c
            $('.c').click(function() {
                var site3 = $(this).index();
                $('.c').css({
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
                obj3 = $(this).attr("alt");
                // Inicio Switch
                switch (site3) {
                    case 0:
                        contexto_canvas_2.lineTo(170, 32);
                        break;
                    case 1:
                        contexto_canvas_2.lineTo(170, 96);
                        break;
                    case 2:
                        contexto_canvas_2.lineTo(170, 160);
                        break;
                    case 3:
                        contexto_canvas_2.lineTo(170, 224);
                        break;
                }
                // Fin Switch
                // console.log(site3);
                contexto_canvas_2.strokeStyle = "#37D3F7";
                contexto_canvas_2.lineWidth = 4;
                contexto_canvas_2.stroke();
                // Fin Stroke 2
                // Inicio if Obj
                console.log(r);
                if (obj1 == obj2 && obj2 == obj3) {
                    console.log(r);
                    r++;
                }
                // Find if Obj
            });
            // Fin Click .c
        });
        // Fin Click .b
    }
    // Fin if
});
function result_tipo_1_4_7() {
    
    
    
    

    if (r >= 4) {
        
        
        
        correcto();
    } else {
        
        incorrecto();
        
        
    }
}
//COPIAR DEL EJERCICIO del index.html o DEL ARCHIVO validate.js 
//COPIAR DEL EJERCICIO del index.html o DEL ARCHIVO validate.js 
