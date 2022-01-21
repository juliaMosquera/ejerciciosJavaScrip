


let ejecutar = document.getElementById("btnEjecutar");

let nombreUduario = document.getElementById("nombreUsuario");
let nombreEdad = document.getElementById("nombreEdad");
let nombreDireccion = document.getElementById("nombreDireccion");
let nombreTelefono = document.getElementById("nombreTelefono");
let nombreDocumento = document.getElementById("nombreDocumento");


const cambiarDatos = () => {
    let nombre = prompt("Ingresa tu nombre");
    let edad = prompt("Ingresa tu edad");
    let direccion = prompt("Ingresa tu direccion");
    let telefono = prompt("Ingresa tu telefono");
    let documento = prompt("Ingresa tu documento");

    nombreUduario.innerHTML =  "Nombre : "+nombre;
    nombreEdad.innerHTML =  "Edad : "+edad;
    nombreDireccion.innerHTML =  "Direccion : "+direccion;
    nombreTelefono.innerHTML =  "Telefono : "+telefono;
    nombreDocumento.innerHTML =  "Documento: "+documento;

    localStorage.setItem("nombre", nombre);
    localStorage.setItem("edad", edad);
    localStorage.setItem("direccion", direccion);
    localStorage.setItem("telefono", telefono);
    localStorage.setItem("documento", documento);
    
    };

    if (localStorage.getItem("nombre")) {
        nombreUduario.innerHTML ="Nombre: " +  localStorage.getItem("nombre")
    } 

    if (localStorage.getItem("edad")) {
        nombreEdad.innerHTML ="Edad: " +  localStorage.getItem("edad")
    } 

    if (localStorage.getItem("direccion")) {
        nombreDireccion.innerHTML ="Direccion: " +  localStorage.getItem("direccion")
    } 

    if (localStorage.getItem("telefono")) {
        nombreTelefono.innerHTML ="Telefono: " +  localStorage.getItem("telefono")
    } 

    if (localStorage.getItem("documento")) {
        nombreDocumento.innerHTML ="Documento: " +  localStorage.getItem("documento")
    } 


    // eventos siempre al final 
    ejecutar.onclick = () => {
        cambiarDatos();
    };



