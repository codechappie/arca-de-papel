dataExercise = {
    next: "../3/index.html",
    procesar: "result_tipo_2_4_3()",
    titulo: "<center><h5><span>Relaciona</span>.</h5></center>",
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
                ctx.moveTo(0,35.5);
                break;
            case 1:
                ctx.moveTo(0,125.5);
                break;
            case 2:
                ctx.moveTo(0,205.5);
                break;
            case 3:
                ctx.moveTo(0,300.5);
                break;
        }
        valor = 1;
    }

    $('.grid-item-b').click(function() {
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
                ctx.lineTo(100,35.5);
                break;
            case 1:
                ctx.lineTo(100,125.5);
                break;
            case 2:
                ctx.lineTo(100,205.5);
                break;
            case 3:
                ctx.lineTo(100,300.5);
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

function result_tipo_2_4_3() {
    var min = $('#Minutos').text();
    var seg = $('#Segundos').text();
    var milseg = $('#Centesimas').text();
    var tiempo = min + ":" + seg + ":" + milseg;

    if (r == 4) {
        localStorage.setItem("Nota<?=$cod?>", nota);
        localStorage.setItem("Time<?=$cod?>", tiempo);
        correcto();
    } else {
        incorrecto();
        localStorage.setItem("Nota<?=$cod?>", "0");
        localStorage.setItem("Time<?=$cod?>", tiempo);
    }

}