let accItem = document.getElementsByClassName('accordion-item');
let accBtn  = document.getElementsByClassName('unit');

for (i = 0; i < accBtn.length; i++){
    accBtn[i].addEventListener('click', toggleItem, false)
}

function toggleItem() {
    let itemClass = this.parentNode.className;
    for (i = 0; i < accItem.length; i++) {
        accItem[i].className = 'accordion-item close';
    }
    if(itemClass == 'accordion-item close'){
        this.parentNode.className = 'accordion-item open'
    }
}


let unidad3 = ["¿Que veo?",
"¿Que figura ves?",
"Describimos la imagen",
"Identifica Objetos",
"Interpretación de textos",
"¿Dónde está?",
"Los tres cerditos (Comprensión de lectura)",
"Adivina qué juguete es",
"El conejo Peluchín",
"Jugamos con los sonidos"];
let unidad4 = ["Encontramos iguras iguales y diferentes",
"Agrupamos objetos",
"Más que... - menos que...",
"¡Vamos a contar!",
"Vamos a contar",
"Repaso: vamos a contar",
"Repaso: vamos a contar7",
"Repaso: secuencia de números",
"Repaso: clave de números"];
let unidad5 = ["¿Qué sentidos usamos?",
"¿Qué sentidos usamos?",
"Exploro animales de mi jardín",
"Me divierto contando los animales de la granja",
"Características de los animales",
"Cómo quiero a mis mascotas",
"Las plantas nos son útiles",
"¿Qué podemos ver?",
"Importancia del agua",
"¿Quiénes aparecen en primavera?",
"¿Qué cosas hay en verano?",
"Lo que llevo a la playa"];
let unidad6 = ["Mis emociones",
"¿Cómo me siento?",
"Hábitos de higiene",
"Situaciones y lugares peligrosos que nos pueden dañar",
"Alimentos limpios y saludables",
"Resolvamos conlictos en el juego",
"El compañerismo",
"Los amigos de la salud",
"El amigo zapatero",
"Cuida la ciudad: El policía",
"Medios de transporte terretre",
];

let html3 = '';
let html4 = '';
let html5 = '';
let html6 = '';

for (let i = 0; i < unidad3.length; i++) {
    html3 += `<a href="./unidad1/ej${i+1}/1">
                <h3>${unidad3[i]}</h3>
                <span class="btn-circle"><i class="fa fa-chevron-right"></i></span>
            </a>`;
}
for (let i = 0; i < unidad4.length; i++) {
    html4 += `<a href="./unidad2/ej${i+1}/1">
                <h3>${unidad4[i]}</h3>
                <span class="btn-circle"><i class="fa fa-chevron-right"></i></span>
            </a>`;
}
for (let i = 0; i < unidad5.length; i++) {
    html5 += `<a href="./unidad3/ej${i+1}/1">
                <h3>${unidad5[i]}</h3>
                <span class="btn-circle"><i class="fa fa-chevron-right"></i></span>
            </a>`;
}
for (let i = 0; i < unidad6.length; i++) {
    html6 += `<a href="./unidad4/ej${i+1}/1">
                <h3>${unidad6[i]}</h3>
                <span class="btn-circle"><i class="fa fa-chevron-right"></i></span>
            </a>`;
}

$(".unidad1").html(html3);
$(".unidad2").html(html4);
$(".unidad3").html(html5);
$(".unidad4").html(html6);