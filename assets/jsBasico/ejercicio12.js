// DOM

let ejecutar = document.getElementById("btnEjecutar");

let nombreUduario = document.getElementById("nombreUsuario");

const cambiarNombre = () => {
    let nombre = prompt("Ingresa tu nombre");
    nombreUduario.innerHTML =  "Bienvenido/a: "+nombre;
    getItem("nombre");
    };


    // eventos siempre al final 

    ejecutar.onclick = () => {
        cambiarNombre();
    };
