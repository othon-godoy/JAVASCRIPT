//Matrizes JavaScript suportam vários valores em uma única variável
var myCars = ["Audi A5", "Range Rover Evoque", "Jaguar F-Type"];

var myCars = [
    "Audi A5", 
    "Range Rover Evoque", 
    "Jaguar F-Type"
];

//É possível acessar um elemento de uma matriz referenciando o número do índice
var myFirstCar = myCars[0];
console.log(myFirstCar);

//Para alterar o valor de um elemento de uma matriz basta atribuir o valor a posição desejada
myCars[0] = "Audi A7";

//Também é possível acessar a matriz completa apenas acessando seu nome 
console.log(myCars);

//Matrizes são um tipo especial de objeto em JavaScript
//Em matrizes os elementos são acessados através de um índice numerado
console.log(myCars[1]);

//Já os elementos de um objeto são acessado através de um índice nomeado
var me = {
    firstName: "Othon",
    lastName: "Godoy",
    age: 21
};

console.log(me.firstName);
console.log(me["lastName"]);

//Os elementos de uma matriz podem ser objetos
var car = {
    portas: 4,
    motor: 1.6,
    marca: "Nissan",
    ano: 2019
};

var cars = [
    "Kicks",
    "Nissan",
    1.6,
    run(),
    ["modelo","marca","motor","funcoes"],
    car
];

//length() -> determina o comprimento de um matriz
console.log(myCars.length);

//Para acessar o último elemento de uma matriz o cumprimento do array -1 deve ser passado como índice
console.log(myCars[myCars.length - 1]);

//É possível percorrer arrays usando um loop
myCarsLen = myCars.length;
for(i = 0; i < myCarsLen; i++){
    console.log(myCarsLen[i]);
}

//Em JavaScript, depois de criado, ainda é possível inserir novos elementos em uma matriz
myCars.push("BMW 320i");
console.log(myCars);
