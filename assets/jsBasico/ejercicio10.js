let dia = prompt("Ingrese un dia de semana: ").toLowerCase();

if (
  dia == "lunes" ||
  dia == "martes" ||
  dia == "miercoles" ||
  dia == "miércoles" ||
  dia == "jueves" ||
  dia == "viernes"
) {
  alert("entre semana");
} else {
  if (dia == "sabado" || dia === "sábado"||dia == "domingo") {
    alert("fin de semana");
  } else {
    alert("por favor ingrese un fin de semana");
  }
}
