let array = [];
let options = '<option value="" disabled selected></option>';


for (let i = 0; i < array.length; i++) {
    options += `<option value="${array[i]}">${array[i]}</option>`
}


$('.slc').html(options);


$('select').formSelect();

dataExercise = {
    next: "../2/index.html",
    procesar: "result_tipo_3_4_8()",
    titulo: "<center><h5><span>Relaciona</span> las fracciones equivalentes siguiendo el ejemplo.</h5></center>",
}
document.getElementById("ftitle").innerHTML = dataExercise.titulo;
document.getElementById("boton1").setAttribute("onclick", dataExercise.procesar);
document.getElementById("nextExercise").setAttribute("href", dataExercise.next);

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
                ctx.moveTo(0,50);
                break;
            case 1:
                ctx.moveTo(0,150);
                break;
            case 2:
                ctx.moveTo(0,240);
                break;
            case 3:
                ctx.moveTo(0,340);
                break;
            case 4:
                ctx.moveTo(0,270);
                break;
            case 5:
                ctx.moveTo(0,325);
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
                ctx.lineTo(100,50);
                break;
            case 1:
                ctx.lineTo(100,150);
                break;
            case 2:
                ctx.lineTo(100,240);
                break;
            case 3:
                ctx.lineTo(100,340);
                break;
            case 4:
                ctx.lineTo(100,270);
                break;
            case 5:
                ctx.lineTo(100,325);
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

function result_tipo_3_4_8() {

    if (r == 4) {
        correcto();
    } else {
        incorrecto();
    }

}