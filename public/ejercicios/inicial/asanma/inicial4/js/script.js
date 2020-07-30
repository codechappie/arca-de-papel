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

let unidad1 = ["Sombras"]


let html1 = '';

for (let i = 0; i < unidad1.length; i++) {
    html1 += `<a href="./unidad1/ej${i+1}/1">
                <h3>${unidad1[i]}</h3>
                <span class="btn-circle"><i class="fa fa-chevron-right"></i></span>
            </a>`;
}
$(".unidad1").html(html1);