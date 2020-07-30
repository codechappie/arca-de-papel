
dataExercise = {
  next: "../2/index.html", 
  procesar:"result_tipo_6_2_9()", 
  titulo:"<center><h5><span>Arrastra</span> las palabras y <span>forma</span> grados del adjetivo según se te indique.</h5></center>",
} 
document.getElementById("ftitle").innerHTML = dataExercise.titulo;
document.getElementById("boton1").setAttribute("onclick", dataExercise.procesar);
document.getElementById("nextExercise").setAttribute("href", dataExercise.next);


r = 0;
arrastre();
listar_random(".alea");

function result_tipo_6_2_9() {

  if (r == 9) {
      correcto();
  } else {
      incorrecto();
      console.log(r)
       
  }
}

