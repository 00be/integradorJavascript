const $precio=200 //define precio entrada

document.getElementsByTagName("h3")[0].innerHTML = "VALOR DEL TICKET $ " + $precio;   
function aparece(mensajeAlert){
    document.getElementById("alertError").style.display="block";
    document.getElementById("alertError").innerHTML=(mensajeAlert);
}
function Cantidad(){
    let aPagar=0;
    let nombre=document.getElementById("nombre").value;
    let apellido=document.getElementById("apellido").value;
    let mail=document.getElementById("mail").value;
    let cantidad=document.getElementById("cantidad").value;
    let opcionDescuento=document.getElementById("descuento").value;
    pintarGris();
    if (nombre==="" || apellido==="" || mail==="" || cantidad===""){
            let mensajeDelError="";
            if (nombre===""){document.getElementById("nombre").style.backgroundColor = "#FF4500";
            mensajeDelError=mensajeDelError+"No ha ingresado el nombre <br>";}
            if (apellido===""){document.getElementById("apellido").style.backgroundColor = "#FF4500";
            mensajeDelError=mensajeDelError+"No ha ingresado el apellido <br>";}
            if (mail===""){document.getElementById("mail").style.backgroundColor = "#FF4500";
            mensajeDelError=mensajeDelError+"No ha ingresado el mail <br>";}
            if (cantidad===""){document.getElementById("cantidad").style.backgroundColor = "#FF4500";
            mensajeDelError=mensajeDelError+"No ha ingresado una cantidad valida <br>";}
            aparece(mensajeDelError);
    }else{
        document.getElementById("nombre").style.borderColor= "";
        document.getElementById("apellido").style.borderColor= "";
    let descuento;
    if(opcionDescuento==1){descuento=.8;}
    if(opcionDescuento==2){descuento=.5;}
    if(opcionDescuento==3){descuento=.15;}
    aPagar=$precio*Number(cantidad);
    aPagar=aPagar-aPagar*Number(descuento);
    console.log(aPagar)
    document.getElementById("mensajePagar").innerHTML=("Total a Pagar <b>$ "+aPagar+"<b>");
}
}
function calcularCantidadSinValidar(){
    let aPagar;
    let nombre=document.getElementById("nombre").value;
    let apellido=document.getElementById("apellido").value;
    let mail=document.getElementById("mail").value;
    let cantidad=document.getElementById("cantidad").value;
    let opcionDescuento=document.getElementById("descuento").value;
    let descuento;
    if(opcionDescuento==1){descuento=.80;}
    if(opcionDescuento==2){descuento=.50;}
    if(opcionDescuento==3){descuento=.15;}
    aPagar=$precio*Number(cantidad);
    aPagar=aPagar-aPagar*Number(descuento);
    console.log(aPagar)
    document.getElementById("mensajePagar").innerHTML=("Total a Pagar <b>$ "+aPagar+"</b>");
}
    


function validarCantidad(){
    let cant=document.getElementById("cantidad").value;
    if (cant> 0 && cant< 100){
        document.getElementById("cantidad").style.borderColor="";
    }else{
        aparece("No ha ingresado una cantidad valida");
        document.getElementById("cantidad").value="0";
        document.getElementById("cantidad").style.borderColor= "#d63384";
    }
}
function ver(){
    let emailIngresado=document.getElementById("mail").value;
    let regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    let esValido=regex.test(emailIngresado);
    document.getElementById("mail").style.borderColor= "";
    if (esValido==false){
        aparece("El mail: "+emailIngresado+" no parece ser correcto")
        document.getElementById("mail").value="";
        document.getElementById("mail").style.borderColor= "#d63384";
}
}
function estudiante(){
    document.getElementById("descuento").value=1;
    if (nombre==="" || apellido==="" || mail==="" || cantidad===""){}
    else{
        calcularCantidadSinValidar();
    }
}
function trainer(){
    document.getElementById("descuento").value=2;
    if (nombre==="" || apellido==="" || mail==="" || cantidad===""){}
    else{
        calcularCantidadSinValidar();
    }
    }
function junior(){
    document.getElementById("descuento").value=3;
    if (nombre==="" || apellido==="" || mail==="" || cantidad===""){}
    else{
        calcularCantidadSinValidar();
    }
}
function limp(){
    document.getElementById("mensajePagar").innerHTML=("Total a Pagar <b>$ 0 ");
    document.getElementById("nombre").value="";
    document.getElementById("apellido").value="";
    document.getElementById("mail").value="";
    document.getElementById("cantidad").value="";
    document.getElementById("descuento").value=1;
    pintarGris();
}
function pintarGris(){
    document.getElementById("nombre").style.borderColor="";
    document.getElementById("apellido").style.borderColor="";
    document.getElementById("mail").style.borderColor="";
    document.getElementById("cantidad").style.borderColor="";
}
function cerrarAlerta(){
    document.getElementById("alertError").style.display="none";
}


