//Os parâmetros de uma função são listadas entre ()
//Dentro do escopo de código os parâmetros se tornam argumentos

function myFunction(p1, p2){
    return p1 * p2;
}

var x = myFunction(4, 5);
console.log(x);


//Uma função pode retornar valor diretamente em um elemento HTML

function toCelsius(fahreinheit){
    return (5/9) * (fahreinheit - 32);
}

document.getElementById("demo").innerHTML = toCelsius;


//Variáveis declaradas no interior de uma função se tornam LOCAIS

//code here can't use carName
function myFunction(){
    var carName = "Volvo";

    //code here can use carName
}
//code here can't use carName