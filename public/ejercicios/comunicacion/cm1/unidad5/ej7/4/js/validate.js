//INICIO PLANTILLA - PLANTILLA - PLANTILLA
dataExercise = {
  next: "../../../index.html", // Siguiente ejercicio
  procesar:"result_tipo_1_4_9()", //tal cual esta en la funcion result_tipo_x_x_x() de la parte inferior del archivo index o el archivo validate
  // El titulo tal cual esta en la carpetade paginacion  ejemplo Comunicacion/1/0/1/pagination.php
  titulo:"<center><h5><span>Ordena</span> las palabras y <span>forma</span> la oración.</h5></center>",
} 
document.getElementById("ftitle").innerHTML = dataExercise.titulo;
document.getElementById("boton1").setAttribute("onclick", dataExercise.procesar);
document.getElementById("nextExercise").setAttribute("href", dataExercise.next);
// FIN PLANTILLA - PLANTILLA - PLANTILLA






//COPIAR DEL EJERCICIO del index.html o DEL ARCHIVO validate.js 
//COPIAR DEL EJERCICIO del index.html o DEL ARCHIVO validate.js 
var p1 = 0;
var p2 = 0;
var p3 = 0;
var p4 = 0;
var p5 = 0;
var p6 = 0;
var p7 = 0;
// var p8 = 0;
var p9 = 0;
var p10 = 0;
var p11 = 0;
// var p12 = 0;
var p13 = 0;
var p14 = 0;
var p15 = 0;
var p16 = 0;
var p17 = 0;
var p18 = 0;
var p19 = 0;
var p20 = 0;

var la = document.querySelector('#listA');
for (var i = la.children.length; i >= 0; i--) {
    la.appendChild(la.children[Math.random() * i | 0]);
}
var ul = document.querySelector('.Ejemplo1');
for (var i = ul.children.length; i >= 0; i--) {
    ul.appendChild(ul.children[Math.random() * i | 0]);
}
var ul = document.querySelector('.Ejemplo2');
for (var i = ul.children.length; i >= 0; i--) {
    ul.appendChild(ul.children[Math.random() * i | 0]);
}
var ul = document.querySelector('.Ejemplo3');
for (var i = ul.children.length; i >= 0; i--) {
    ul.appendChild(ul.children[Math.random() * i | 0]);
}

$(".pieza").draggable({
    start: function() {
        element = $(this).attr("alt");
    }
});

// 1
$("#1").droppable({

    drop: function(event, ui) {
        $(".pieza h4").css("background-color", "#B6ECFF");
        if (element == "p1") {
            p1++
            //console.log(bo);
        }
        ui.draggable.draggable("disable", 1);
    }
});

// 2
$("#2").droppable({

    drop: function(event, ui) {
        $(".pieza h4").css("background-color", "#B6ECFF");
        if (element == "p2") {
            p2++
            //console.log(bo);
        }
        ui.draggable.draggable("disable", 1);
    }
});

// 3
$("#3").droppable({

    drop: function(event, ui) {
        $(".pieza h4").css("background-color", "#B6ECFF");
        if (element == "p3") {
            p3++
        }
        ui.draggable.draggable("disable", 1);
    }
});

// 4
$("#4").droppable({

    drop: function(event, ui) {
        $(".pieza h4").css("background-color", "#B6ECFF");
        if (element == "p4") {
            p4++
        }
        ui.draggable.draggable("disable", 1);
    }
});

// 5
$("#5").droppable({

    drop: function(event, ui) {
        $(".pieza h4").css("background-color", "#B6ECFF");
        if (element == "p5") {
            p5++
            //console.log(bo);
        }
        ui.draggable.draggable("disable", 1);
    }
});

// 6
$("#6").droppable({

    drop: function(event, ui) {
        $(".pieza h4").css("background-color", "#B6ECFF");
        if (element == "p6") {
            p6++
            //console.log(bo);
        }
        ui.draggable.draggable("disable", 1);
    }
});

// 7
$("#7").droppable({

    drop: function(event, ui) {
        $(".pieza h4").css("background-color", "#B6ECFF");
        if (element == "p7") {
            p7++
        }
        ui.draggable.draggable("disable", 1);
    }
});

// 8
// $("#8").droppable({

//     drop: function(event, ui) {
//         $(".pieza h4").css("background-color", "#B6ECFF");
//         if (element == "p8") {
//             p8++
//         }
//         ui.draggable.draggable("disable", 1);
//     }
// });

// 9
$("#9").droppable({

    drop: function(event, ui) {
        $(".pieza h4").css("background-color", "#B6ECFF");
        if (element == "p9") {
            p9++
        }
        ui.draggable.draggable("disable", 1);
    }
});

// 10
$("#10").droppable({

    drop: function(event, ui) {
        $(".pieza h4").css("background-color", "#B6ECFF");
        if (element == "p10") {
            p10++
        }
        ui.draggable.draggable("disable", 1);
    }
});

// 11
$("#11").droppable({

    drop: function(event, ui) {
        $(".pieza h4").css("background-color", "#B6ECFF");
        if (element == "p11") {
            p11++
        }
        ui.draggable.draggable("disable", 1);
    }
});

// 12
// $("#12").droppable({

//     drop: function(event, ui) {
//         $(".pieza h4").css("background-color", "#B6ECFF");
//         if (element == "p12") {
//             p12++
//         }
//         ui.draggable.draggable("disable", 1);
//     }
// });

$("#13").droppable({

    drop: function(event, ui) {
        $(".pieza h4").css("background-color", "#B6ECFF");
        if (element == "p13") {
            p13++
        }
        ui.draggable.draggable("disable", 1);
    }
});

$("#14").droppable({

    drop: function(event, ui) {
        $(".pieza h4").css("background-color", "#B6ECFF");
        if (element == "p14") {
            p14++
        }
        ui.draggable.draggable("disable", 1);
    }
});

$("#15").droppable({

    drop: function(event, ui) {
        $(".pieza h4").css("background-color", "#B6ECFF");
        if (element == "p15") {
            p15++
        }
        ui.draggable.draggable("disable", 1);
    }
});

$("#16").droppable({

    drop: function(event, ui) {
        $(".pieza h4").css("background-color", "#B6ECFF");
        if (element == "p16") {
            p16++
        }
        ui.draggable.draggable("disable", 1);
    }
});

$("#17").droppable({

    drop: function(event, ui) {
        $(".pieza h4").css("background-color", "#B6ECFF");
        if (element == "p17") {
            p17++
        }
        ui.draggable.draggable("disable", 1);
    }
});

$("#18").droppable({

    drop: function(event, ui) {
        $(".pieza h4").css("background-color", "#B6ECFF");
        if (element == "p18") {
            p18++
        }
        ui.draggable.draggable("disable", 1);
    }
});

$("#19").droppable({

    drop: function(event, ui) {
        $(".pieza h4").css("background-color", "#B6ECFF");
        if (element == "p19") {
            p19++
        }
        ui.draggable.draggable("disable", 1);
    }
});

$("#20").droppable({

    drop: function(event, ui) {
        $(".pieza h4").css("background-color", "#B6ECFF");
        if (element == "p20") {
            p20++
        }
        ui.draggable.draggable("disable", 1);
    }
});
function result_tipo_1_4_9() {
    
    
    
    

    if (p1 == 1 && p2 == 1 && p3 == 1 && p4 == 1 && p5 == 1 && p6 == 1 && p7 == 1 && p9 == 1 && p10 == 1 && p11 == 1
        && p13 == 1 && p14 == 1 && p15 == 1 && p16 == 1 && p17 == 1 && p18 == 1 && p19 == 1 && p20 == 1) {
        
        
        correcto();
    } else {
        incorrecto();
        
        
    }

}
//COPIAR DEL EJERCICIO del index.html o DEL ARCHIVO validate.js 
//COPIAR DEL EJERCICIO del index.html o DEL ARCHIVO validate.js 
