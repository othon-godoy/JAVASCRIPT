//sort() -> ordena uma matriz alfabeticamente
var myCars = [
    "Audi A7",
    "Range Rover Evoque",
    "Jaguar F-Type"
];

console.log(myCars.sort());

//por padrão a função sort() classifica os valores como strings, portanto se a sequência for numérica ocorrão erros. Para corrigir isso a função de comparação deve ser usada
var points = [40,100,1,5,25,10];
points.sort(function(a,b){return a - b});

console.log(points);

//reverse() -> inverte os elementos de uma matriz
var myCars = [
    "Audi A7",
    "Range Rover Evoque",
    "Jaguar F-Type"
];

console.log(myCars.reverse());

//Random
console.log(myCars.sort(function(a,b){return 0.5 - Math.random}));