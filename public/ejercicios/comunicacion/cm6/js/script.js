/* eslint-disable no-undef */
let accItem = document.getElementsByClassName("accordion-item");
let accBtn = document.getElementsByClassName("unit");

for (i = 0; i < accBtn.length; i++) {
  accBtn[i].addEventListener("click", toggleItem, false);
}

function toggleItem() {
  let itemClass = this.parentNode.className;
  for (i = 0; i < accItem.length; i++) {
    accItem[i].className = "accordion-item close";
  }
  if (itemClass == "accordion-item close") {
    this.parentNode.className = "accordion-item open";
  }
}

let unidad3 = ["La entrevista", "El diálogo", "El adjetivo y sus grados"];
let unidad4 = [
  "El texto argumentativo",
  "El cuadro de doble entrada",
  "La argumentación",
];
let unidad5 = [
  "La guía turística",
  "La exposición acerca de un lugar turístico",
  "Los pronombres personales, enclíticos y relativos",
];
let unidad6 = [
  "La infografía",
  "La ficha de resumen",
  "La explicación de una infografía",
  "Las formas simples y compuestas de los verbos",
  "El uso del guion y la raya",
  "Elaboramos una infografía",
  "La estructura de una infografía",
  "El género dramático: los personajes",
];
let unidad7 = [
  "El texto instructivo",
  "Dramatizar un hecho histórico",
  "La preposición: clases",
  "Las palabras juntas o separadas",
  "El texto instructivo",
  "Los elementos del texto instructivo",
  "Las figuras literarias: la personificación",
];
let unidad8 = [
  "Las figuras literarias: la personificación",
  "El diagrama de árbol",
  "La declamación ",
  "El adverbio: tiempo y cantidad",
  "Los dos puntos y el uso de las comillas",
  "El texto lírico. El poema",
  "La correcta escritura y rima de un poema",
  "Las figuras literarias: la metáfora y el símil",
];
let unidad9 = [
  "El texto expositivo con cuadros estadísticos",
  "La narración de costumbres",
  "El sujeto: núcleo y modificadores",
  "El texto expositivo con cuadros estadísticos",
  "Cómo presentar un texto expositivo",
  "Las figuras literarias: el epíteto y la onomatopeya",
];
let unidad10 = [
  "El esquema de llaves",
  "El noticiero en televisión",
  "El predicado",
  "Las palabras homófonas con «ll», «y» y «b», «v»",
  "La crónica periodística",
  "Cómo presentar una crónica periodística",
  "Las figuras literarias: hipérbaton e hipérbole",
];

let html3 = "";
let html4 = "";
let html5 = "";
let html6 = "";
let html7 = "";
let html8 = "";
let html9 = "";
let html10 = "";

for (let i = 0; i < unidad3.length; i++) {
  html3 += `<a href="./unidad3/ej${i + 1}/1">
                <h3>${unidad3[i]}</h3>
                <span class="btn-circle"><i class="fa fa-chevron-right"></i></span>
            </a>`;
}
for (let i = 0; i < unidad4.length; i++) {
  html4 += `<a href="./unidad4/ej${i + 1}/1">
                <h3>${unidad4[i]}</h3>
                <span class="btn-circle"><i class="fa fa-chevron-right"></i></span>
            </a>`;
}
for (let i = 0; i < unidad5.length; i++) {
  html5 += `<a href="./unidad5/ej${i + 1}/1">
                <h3>${unidad5[i]}</h3>
                <span class="btn-circle"><i class="fa fa-chevron-right"></i></span>
            </a>`;
}
for (let i = 0; i < unidad6.length; i++) {
  html6 += `<a href="./unidad6/ej${i + 1}/1">
                <h3>${unidad6[i]}</h3>
                <span class="btn-circle"><i class="fa fa-chevron-right"></i></span>
            </a>`;
}
for (let i = 0; i < unidad7.length; i++) {
  html7 += `<a href="./unidad7/ej${i + 1}/1">
                <h3>${unidad7[i]}</h3>
                <span class="btn-circle"><i class="fa fa-chevron-right"></i></span>
            </a>`;
}
for (let i = 0; i < unidad8.length; i++) {
  html8 += `<a href="./unidad8/ej${i + 1}/1">
                <h3>${unidad8[i]}</h3>
                <span class="btn-circle"><i class="fa fa-chevron-right"></i></span>
            </a>`;
}
for (let i = 0; i < unidad9.length; i++) {
  html9 += `<a href="./unidad9/ej${i + 1}/1">
                <h3>${unidad9[i]}</h3>
                <span class="btn-circle"><i class="fa fa-chevron-right"></i></span>
            </a>`;
}
for (let i = 0; i < unidad10.length; i++) {
  html10 += `<a href="./unidad10/ej${i + 1}/1">
                <h3>${unidad10[i]}</h3>
                <span class="btn-circle"><i class="fa fa-chevron-right"></i></span>
            </a>`;
}

$(".unidad3").html(html3);
$(".unidad4").html(html4);
$(".unidad5").html(html5);
$(".unidad6").html(html6);
$(".unidad7").html(html7);
$(".unidad8").html(html8);
$(".unidad9").html(html9);
$(".unidad10").html(html10);
