//toFixed() -> retorna uma string com um número específico de casas decimais
var num = 1.234;
console.log(num.toFixed(0));
console.log(num.toFixed(1));
console.log(num.toFixed(2));

//toPrecision() -> retorna uma string com um número aproximado
var num = 1.234;
console.log(num.toPrecision());
console.log(num.toPrecision(1));
console.log(num.toPrecision(2));

//parseInt() -> retorna um número inteiro porém não arredonda, apenas ignora as casas decimais
var num = parseInt("10.33");
console.log(num);

//parseFloat() -> retorna um número com casas decimais
var num = parseFloat("10.33");
console.log(num);