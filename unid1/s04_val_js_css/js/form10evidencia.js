const fnValidar10 = () => {
    let xNombre = document.getElementById("txtNombre").value;
    
    if(xNombre=="" || /^\s+$/.test(xNombre)) {
        alert("Falta NOMBRE...");
        return false;
    }

    let xEdad = document.getElementById("txtEdad").value;
    if(xEdad==""){
        alert("Falta Edad...");
        return false;
    }

    
    let elementoPref = document.getElementsByName("chkPrefer");
	let valorElegidoPreferencia = "";
	let eligioPreferencia = false;
	for(let i=0; i < elementoPref.length; i++) {
		if(elementoPref[i].checked) {
			valorElegidoPreferencia = elementoPref[i].value;
			eligioPreferencia = true;
		}
	}

    if(!eligioPreferencia){
		alert("Elija UNA PREFERENCIA...");
		return false;
	}else{
		alert("Su preferencia elegida es " + valorElegidoPreferencia);
	}

    return true;

}