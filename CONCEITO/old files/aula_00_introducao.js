//Introducao à JavaScript
alert('JavaScript Externo');

var exemplo1 = 1;
var Exemplo1 = 2;

//JavaScript é case sensitive, dessa forma variaveis com o mesmo nome, porém com escritas diferentes, ocupam dois espaços de memória distintos. 
alert('Valor da variável exemplo1: ' + exemplo1);
alert('Valor da variável Exemplo1: ' + Exemplo1);

//JavaScript, assim como o PHP, não é fortemente tipada, o que significa que a tipagem da variável é realizada no momento da atribuição de um valor. 
var int = 1;
var float = 1.5;
var double = 1.234567;
var string = "JavaScript";
var boolean = true;

console.log(int);
console.log(float);
console.log(double);
console.log(string);
console.log(boolean);

//Atribuição de valor às variáveis por meio do prompt
var nome = prompt('Digite seu nome: ', 'Insira seu nome aqui');

var op = confirm("Deseja continuar? Essa ação não poderá ser desfeita");
document.write('Olá, ' + nome);
document.write("<br>Opção confirm escolhida: " + op);

document.write("</br>");

//Concatenação de variáveis document.write
var texto1 = "Aula: ";
var texto2 = "JavaScript";

document.write("Testando a interpolação de variáveis </br>");
document.write(texto1 + texto2);

//Perceba que ao realizar a interpretação da variável o JavaScript entendeu que o comando </br> era um comando HTML e o executou ao invés de imprimir em tela, porém não é isso que ocorre no console.log()

//Concatenação de variáveis console.log
console.log(texto1 + texto2);
console.log(texto1 + "\n" + texto2);

//Para o console.log() o comando para 'pular linha' é o \n




