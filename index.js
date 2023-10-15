function calcular(){
    let sumar=document.getElementsByName("suma")[0];
    let restar=document.getElementsByName("resta")[0];
    let multi=document.getElementsByName("multi")[0];
    let dividir=document.getElementsByName("divide")[0];

    let primero= parseFloat(document.getElementById("n1").value);
    let segundo=parseFloat(document.getElementById("n2").value);
    let operacion=0;

    if (sumar.checked){
        operacion=primero+segundo
    }
    if (restar.checked){
        operacion=primero-segundo
    }
    if (multi.checked){
        operacion=primero*segundo
    }
    if (dividir.checked){
        if (segundo==0){
            alert("No se puede dividir.")
            return;
        }
        else{
            operacion=primero/segundo
        }
    }
    alert("El resultado de la operacion es: "+ operacion)    
}