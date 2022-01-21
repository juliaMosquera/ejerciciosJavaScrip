// Local Storage 

let ejecutar = document.getElementById("btnEjecutar");
let nombreUduario = document.getElementById("nombreUsuario");

const cambiarNombre = () => {
    let nombre = prompt("Ingresa tu nombre");
    nombreUduario.innerHTML =  "Bienvenido/a: "+nombre;
    localStorage.setItem("nombre", nombre);
    };
    
if (localStorage.getItem("nombre")) {
    nombreUduario.innerHTML ="Bienvenido/a:" +  localStorage.getItem("nombre")
} 


    // eventos siempre al final 

    ejecutar.onclick = () => {
        cambiarNombre();
    };
