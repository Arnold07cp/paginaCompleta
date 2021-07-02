function fnValidar02()
{
    let xNombres = document.getElementById("txtNombres").value;
    if(xNombres == ""){
        alert("Falta nombres...")
        return false;
    }

    let xApellidos = document.getElementById("txtApellidos").value;
    if(xApellidos == ""){
        alert("Falta apellidos...")
        return false;
    }

    let xDireccion = document.getElementById("txtDireccion").value;
    if(xDireccion == ""){
        alert("Falta Direccion...")
        return false;
    }

    let xEdad = document.getElementById("txtEdad").value;
    if(xEdad == ""){
        alert("Falta Edad...")
        return false;
    }
    
    let xfecNac = document.getElementById("fecNac").value;
    if(xfecNac== ""){
        alert("Falta fecha de nacimiento...")
        return false;
    }


    let elementoGenero = document.getElementsByName("rdGenero");
	let valorElegidoPreEstado= "";
	let eligioEstado = false;
	for(let i=0; i < elementoGenero.length; i++) {
		if(elementoGenero[i].checked) {
			valorElegidoPreEstado = elementoGenero[i].value;
			eligioEstado = true;
		}
	}

    if(!eligioEstado){
		alert("Elija un GENERO...");
		return false;
	}else{
		alert("Su GENERO es " + valorElegidoPreEstado);
	}

    return true;
 
}