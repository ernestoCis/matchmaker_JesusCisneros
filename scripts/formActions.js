const NACIONALIDADES_ACEPTADAS = [
    {key: "AU", name: "Australia"},
    {key: "BR", name: "Brasil"},
    {key: "CA", name: "Canada"}
];

window.onload = function(){
    const form = document.getElementsByTagName("form");
    const inputs = form[0].getElementsByTagName("input");
    const selects = form[0].getElementsByTagName("select");

    for(let input of inputs){
        input.onfocus = resaltarDesresaltar;

        input.addEventListener("blur", noResaltar);
    }

    for(let select of selects){
        select.onfocus = resaltar;

        select.addEventListener("blur", noResaltar);
    }

    llenarNacionalidad();
}

function llenarNacionalidad(){
    const nacionalidades = document.getElementById("nationality");

    for(let{key, name} of NACIONALIDADES_ACEPTADAS){
        const option = document.createElement("option");
        option.value = key;
        option.innerHTML = name;
        nacionalidades.appendChild(option);
    }
}

function resaltar(evento){
    evento.target.classList.add("selected");
}

function noResaltar(evento){
    const clase = evento.target.classList.contains("selected");
    if(clase){
        evento.target.classList.remove("selected");
    }
}

function resaltarDesresaltar(evento){
    evento.target.classList.toggle("selected");
}