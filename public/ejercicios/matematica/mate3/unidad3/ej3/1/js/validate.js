dataExercise = {
    next: "../2/index.html",
    procesar: "result_tipo_3_2_9()",
    titulo: "<center><h5><span>Arrastra</span> el número antecesor y sucesor de los siguientes números.</h5></center>",
}
document.getElementById("ftitle").innerHTML = dataExercise.titulo;
document.getElementById("boton1").setAttribute("onclick", dataExercise.procesar);
document.getElementById("nextExercise").setAttribute("href", dataExercise.next);




var rpta = 0, otros = 0, element, element2;

    $(".obj").draggable({
        revert:false,
        start: function() {
            element=$(this).attr("data-value"); 
            
        },
        // finish: function(){
        //     $(this).css("box-shadow","none");
        // }
        
    });
    $( ".droppable" ).droppable({
      classes: {
        "ui-droppable-active": "",
        "ui-droppable-hover": "dropable-hover"
      },
      drop: function( event, ui ) {
        element2 = $(this).attr("data-value");
        $(this).css("background-color", "rgb(30, 136, 229)");
      //  $( this ).target.append(event.target);    
        

        if(element == element2 ){
          rpta++;
          console.log(element2)
        }else{
          otros++;
        }
        element.removeClass("pieza");
      }
    });

function result_tipo_3_2_9() {

    if (rpta == 10) {
        correcto();

    } else {
        incorrecto();
    }
}

var cols = document.querySelectorAll('.aleatorio');

[].forEach.call(cols, (e) => {

    for (var i = e.children.length; i >= 0; i--) {
        e.appendChild(e.children[Math.random() * i | 0]);
    }

});