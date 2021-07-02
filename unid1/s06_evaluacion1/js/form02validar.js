function fnValidar02()
{
    var xTexto = document.getElementById("txtTexto").value;
    if(xTexto==" " || /^\s+$/.test(xTexto))
    {
       alert("Escriba Texto");
       return false;
    }
    var elementoGenero = document.getElementsByName("rdGenero");
    var seleccionado = false;
    for(var i=0; i < elementoGenero.length; i++)
    {
        if(elementoGenero[i].checked)
        {
            seleccionado = true;
        }     
    }
    if(!seleccionado){
        alert("Elija Género");
        return false;
    }
    let cont=0;
    let valorElegidoPreferencia="";
    let elementoPref = document.getElementsByName("chkPrefer[]");
    var eligioPreferencia=false;
    for(let i=0; i<(elementoPref.length);i++){
        if(elementoPref[i].checked){
            valorElegidoPreferencia= elementoPref[i].value;
            eligioPreferencia=true;
            cont=cont+1;
        }
    }
    if(cont==0){
        alert("ELIJA DOS PREFERENCIAS");
        return false;
    }else if(cont!=2){
        if(cont==1){
            cont='una'
            alert('ELIJA SOLO 2 PREFERENCIAS '+' SOLO ELIGIO ' +cont+ ' preferencia.');
            return false;}
        else if(cont=3){
            cont='tres'
            alert('ELIJA SOLO 2 PREFERENCIAS '+' ELIGIO ' +cont+ ' preferencias.');
            return false;}
        else if(cont=4){
            cont='cuatro'
            alert('ELIJA SOLO 2 PREFERENCIAS '+' ELIGIO ' +cont+ ' preferencias.');
            return false;}
    }

    return true;
	
}