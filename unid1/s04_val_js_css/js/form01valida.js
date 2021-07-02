const fnValidar01 = () => {

    //RESUMEN. Pasos para validar
    //1)Formulario con el elemento HTML que tenga "name" y "id"
    //2)Un evento que desencadene una funcion son retono true o false
    //3) Prueba lógica para verfificar si se ha escrito o no se escrito



    let xTexto = document.getElementById("txtTexto").value;
    
    if(xTexto=="" || /^\s+$/.test(xTexto)) {
        alert("Falta TEXTO...");
        return false;
    }

    let xNumero = document.getElementById("txtNumero").value;
    if(xNumero==""){
        alert("Falta NÚMERO...");
        return false;
    }


   /// Caso contrario ///  */
   return true;
    	
}