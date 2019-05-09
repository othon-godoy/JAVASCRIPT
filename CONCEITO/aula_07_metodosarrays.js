//toString() -> converte uma matriz em uma sequência de caracteres separados por vírgula
var myCars = [
    "Audi A7",
    "Range Rover Evoque",
    "Jaguar F-Type"
];

console.log(myCars.toString());

//join() -> une todos os elementos de uma matriz em uma string. Se comporta como o toString(), mas é possível especificar o separador

console.log(myCars.join(" - "));

//pop() -> remove o último elemento de uma matriz
//retorna o que foi retirado
console.log(myCars.pop());

//push() -> adiciona um novo elemento ao final da matriz
console.log(myCars.push("Jaguar F-Type"));
//retorna o novo tamanho da matriz

//shift() -> remove o primeiro elemento de uma matriz e desloca todos os outros elementos para um índice inferior
//retorna o elemento removido
console.log(myCars);
console.log(myCars.shift());

//unshift() -> adiciona um novo elemento no início de uma matriz e desloca os demais elementos para um índice superior
console.log(myCars.unshift("BMW 320i"));

//splice() -> adiciona novos elementos em uma matriz 
//splice(onde deve ser inserido, quantos serão removidos, novos elementos que serão adicionados)
console.log(myCars.splice(2,0,"Mercedes Benz C180"));

//splice() -> com a configuração inteligente de parâmetros, é possível remover elementos sem deixar buracos na matriz
//splice(onde deve ser inserido, quantos serão removidos)
console.log(myCars.slice(2,1));