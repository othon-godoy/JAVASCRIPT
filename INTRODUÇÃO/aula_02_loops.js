/*
"Fizzbuzz" é uma famosa pergunta de entrevista utilizada em entrevistas de programação. Funciona mais ou menos assim:

Faça um loop dos números 1 a 100
Se o número for divisível por 3, exiba "Fizz"
Se o número for divisível por 5, exiba "Buzz"
Se o número for divisível por ambos 3 e 5, exiba "FizzBuzz"
Se o número não for divisível por 3 nem 5, exiba o número
DICA: um número x é divisível por um número y se o resultado de x / y tem um resto 0. Por exemplo, 10 é divisível por 2, pois 10 / 2 = 5, sem resto. Você pode checar se um número é divisível por outro verificando se x % y === 0.

Vamos deixar que você programe sua própria versão do FizzBuzz, chamada "JuliaJames" (sim, construtivo, certo?). Tenha em mente que, em uma entrevista, você deveria escrver um código eficiente com pouca duplicação. Não queremos que se preocupe com isso nesta pergunta. Apenas foque na prática do uso de loops.

Direções:
Escreva um loop while que:

Faça um loop dos números 1 a 20
Se o número for divisível por 3, exiba "Julia"
Se o número for divisível por 5, exiba "James"
Se o número for divisível por 3 e 5, exiba "JuliaJames"
Se o número não for divisível por 3 nem 5, exiba o número
*/

var x = 1;

while (x <= 20) {
    if((x % 3 === 0) && (x % 5 === 0)){
        console.log("JuliaJames");
    }else if((x % 3 === 0) && (x % 5 !== 0)){
        console.log("Julia");
    }else if((x % 3 !== 0) && (x % 5 === 0)){
        console.log("James");
    }else{
        console.log(x);
    }
    
    x++;
}

/*
Direções:
Escreva um loop que exiba a canção a seguir. Começando em 99 e terminando em 1 garrafa (bottle).

99 bottles of juice on the wall! 99 bottles of juice! Take one down, pass it around... 98 bottles of juice on the wall!
98 bottles of juice on the wall! 98 bottles of juice! Take one down, pass it around... 97 bottles of juice on the wall!
...
2 bottles of juice on the wall! 2 bottles of juice! Take one down, pass it around... 1 bottle of juice on the wall!
1 bottle of juice on the wall! 1 bottle of juice! Take one down, pass it around... 0 bottles of juice on the wall!
Alguns detalhes:

Observe a pluralização da palavra "bottle" quando você passa de 2 bottles para 1 bottle.
Seu editor de texto provavelmente tentará corrigir suas reticências ... para o caractere …. Não utilize o caractere de reticências neste quiz.
*/

var num = 99;

while (num > 0) {
    if(num === 1){
        console.log(num + " bottle of juice on the wall! " + num + " bottle of juice! Take one down, pass it around... " + --num +" bottles of juice on the wall!");
    }else if(num === 2){
        console.log(num + " bottles of juice on the wall! " + num + " bottles of juice! Take one down, pass it around... " + --num +" bottle of juice on the wall!");
    }else{
        console.log(num + " bottles of juice on the wall! " + num + " bottles of juice! Take one down, pass it around... " + --num +" bottles of juice on the wall!");
    }
}

/*
A contagem regressiva da NASA para lançamento inclui checkpoints onde os engenheiros da NASA completam certas tarefas técnicas. Durante o minuto final, a NASA tem seis tarefas a concluir:

Orbiter transfers from ground to internal power (T-50 seconds)
Ground launch sequencer is go for auto sequence start (T-31 seconds)
Activate launch pad sound suppression system (T-16 seconds)
Activate main engine hydrogen burnoff system (T-10 seconds)
Main engine start (T-6 seconds)
Solid rocket booster ignition and liftoff! (T-0 seconds)
NOTA: "T-50 seconds" se lê "T-menos 50 segundos".

Instruções:
Escreva um loop while que faz uma contagem regressiva de 60 segundos e:

Se há uma tarefa sendo finalizada, exibe a tarefa
Se não há uma tarefa sendo finalizada, exibe o tempo no formato T-x seconds
Utiliza as descrições de tarefa e tempo mostradas acima.

Seu código:
Seu resultado deve ser mais ou menos assim:

T-60 seconds
T-59 seconds
T-58 seconds
...
T-51 seconds
Orbiter transfers from ground to internal power
T-49 seconds
...
T-3 seconds
T-2 seconds
T-1 seconds
Solid rocket booster ignition and liftoff!
*/

var t = 60;

while(t >= 0){
    if(t === 50){
        console.log("Orbiter transfers from ground to internal power");
    }else if(t === 31){
        console.log("Ground launch sequencer is go for auto sequence start");
    }else if(t === 16){
        console.log("Activate launch pad sound suppression system");
    }else if(t === 10){
        console.log("Activate main engine hydrogen burnoff system");
    }else if(t === 6){
        console.log("Main engine start");
    }else if(t === 0){
        console.log("Solid rocket booster ignition and liftoff!");
    }else{
        console.log("T-"+ t + " seconds");
    }
    
    --t;
}

/*
Instruções:
Reescreva o loop while a seguir como um loop for:

var x = 9;
while (x >= 1) {
  console.log("hello " + x);
  x = x - 1;
}
*/

for(var x = 9; x >= 1; x--){
    console.log("hello " + x);
}

/*
Instruções:
Aqui está um loop for que, em teoria, deve exibir os números 5 a 9. Conserte o erro!

for (x < 10; x++) {
  console.log(x);
}
*/

for (var x = 5; x < 10; x++) {
    console.log(x);
}

/*
Instruções:
O loop for abaixo tem um erro. Conserte-o!

for (var k = 0 k < 200 k++) {
  console.log(k);
}
*/

for (var k = 0; k < 200; k++) {
    console.log(k);
}

/*
Direções:
Escreva um loop for que exiba como saída o fatorial do número 12:

Um fatorial é calculado multiplicando um número por todos os números abaixo dele. Por exemplo, 3! ou "3 fatorial" é 3 * 2 * 1 = 6

3! = 3 * 2 * 1 = 6 3!=3∗2∗1=6
4! = 4 * 3 * 2 * 1 = 24 4!=4∗3∗2∗1=24
5! = 5 * 4 * 3 * 2 * 1 = 120 5!=5∗4∗3∗2∗1=120

Salve sua resposta final em uma variável chamada solution e exiba seu valor no console.
*/

var solution = 1;

for(var x = 4; x > 1; x--){
    console.log(solution *= x);
}

/*
Instruções:

Creative Commons - Jeffrey Smith - "State Theater"

Os assentos em um teatro geralmente são compostos pelo número da fileira e do assento em si, para ajudar seus frequentadores a acharem seus lugares. Se existem 26 fileiras (0 a 25) e 100 assentos (0 a 99) em cada fileira, escreva um loop for aninhado para exibir todas as diferentes combinações de assentos no teatro.

Exemplo de saída para a informação de fileira/assento: exiba cada número de filera e assento em uma linha separada

0-0
0-1
0-2
...
25-97
25-98
25-99
*/

// Write your code here
for(f = 0; f < 26; f++){
    for(a = 0; a < 100; a++){
        console.log(f + "-" + a);
    }
}
