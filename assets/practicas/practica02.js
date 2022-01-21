let departamento = prompt(
  "Por favor ingrese uno de estos departamentos: \n valle del cauca \n antioquia \n quindio \n nariño \n huila "
);
if (departamento != "valle del cauca" || departamento != "antioquia" || departamento != "quindio" || departamento != "nariño" || departamento != "huila") {
  alert("el departamento que usted ingreso no esta la lista");
} 

if (departamento === "valle del cauca") {
  let ciudad = prompt(
    "Ingrese una de estas ciudades: \n cali \n candelaria \n buga \n buenaventura \n cartago"
  );

  if (ciudad === "cali") {
    alert("Mira ve");
  } else
  if (ciudad === "candelaria") {
    alert("Bello candelaria");
  } else
  if (ciudad === "buga") {
    alert("Bello mi buga");
  }else
  if (ciudad === "buenaventura") {
    alert("Bello puerto del mar buenaventura");
  } else
  if (ciudad === "cartago") {
    alert("Bello cartago");
  }else{
      alert("La ciudad que usted ingreso no esta la lista");
  }
}

else if (departamento === "antioquia") {
    let ciudadA = prompt(
      "Ingrese una de estas ciudades: \n medellin \n bello \n rio negro \n caldas \n itagui"
    );
    if (ciudadA === "medellin") {
      alert("Que mas parcero");
    }else
    if (ciudadA === "bello") {
      alert("Que bella mi ciudad");
    } else
    if (ciudadA === "rio negro") {
      alert("Que bello mi rio negro");
    } else
    if (ciudadA === "caldas") {
      alert("Que bella mi ciudad");
    }else
    if (ciudadA === "itagui") {
      alert("Que bella mi itagui");
    }else {
        alert("La ciudad no esta la lista");
    }
}

else if (departamento === "quindio") {
    let ciudadQ = prompt(
      "Ingrese una de estas ciudades: \n armenia \n cordoba \n monte negro \n quimbaya \n salento"
    );
    if (ciudadQ === "armenia") {
      alert("Que bella mi armenia");
    }else
    if (ciudadQ === "cordoba") {
      alert("Que bella mi cordoba");
    } else
    if (ciudadQ === "monte negro") {
      alert("Que bello monte negro");
    } else
    if (ciudadQ === "quimbaya") {
      alert("Que bella mi quimbaya");
    }else
    if (ciudadQ === "salento") {
      alert("Que bella mi salento");
    }else {
        alert("La ciudad no esta la lista");
    }
}

else if (departamento === "nariño") {
    let ciudadN = prompt(
      "Ingrese una de estas ciudades: \n pasto \n la cruz \n taminago \n la florida \n barbacoas"
    );
    if (ciudadN === "pasto") {
      alert("Que bella mi pasto");
    }else
    if (ciudadN === "la cruz") {
      alert("Que bello la cruz");
    } else
    if (ciudadN === "taminango") {
      alert("Que bella taminago");
    } else
    if (ciudadN === "la florida") {
      alert("Que bella mi florida");
    }else
    if (ciudadN === "barbacoas") {
      alert("Que bella barbacoas");
    }else {
        alert("La ciudad no esta la lista");
    }
}

else if (departamento === "huila") {
    let ciudadH = prompt(
      "Ingrese una de estas ciudades: \n neiva \n campo alegre \n la plata \n gigante \n san angustin"
    );
    if (ciudadH === "neiva") {
      alert("Que bella mi neiva");
    }else
    if (ciudadH === "campo alegre") {
      alert("Que bella mi campo alegre");
    } else
    if (ciudadH === "la plata") {
      alert("Que bella la plata");
    } else
    if (ciudadH === "gigante") {
      alert("Que bella mi gigante");
    }else
    if (ciudadH === "san anguistin") {
      alert("Mira ve");
    }else {
        alert("La ciudad no esta la lista");
    }
}


