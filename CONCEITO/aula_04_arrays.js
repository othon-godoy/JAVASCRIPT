/*
Instruções:
Crie uma array chamadaudaciFamily e adicione "Julia", "James" e seu nome a ela. Então, imprima udaciFamily no console, usando console.log.
*/

// your code goes here
var udaciFamily = ["Julia", "James", "Othon"];
console.log(udaciFamily);

/*
O drama de TV ocidental do espaço Firefly estreou nos Estados Unidos em 20 de setembro de 2002. Apesar de o programa ter apresentado somente quatorze episódios e ter sido cancelado durante a primeira temporada, ele continua popular hoje em dia, com uma crescente base de fãs. Nele, o capitão Mal, interpretado por Nathan Fillion, lidera uma tripulação de renegados na nave espacial Serenity.

Instruções:
Crie uma array chamada crew para organizar a tripulação do Serenity e a defina como igual às variáveis abaixo . Você não precisa digitar as strings presentes, apenas usar as variáveis fornecidas.

var captain = "Mal";
var second = "Zoe";
var pilot = "Wash";
var companion = "Inara";
var mercenary = "Jayne";
var mechanic = "Kaylee";
Então, imprima a array crew no console.
*/

var captain = "Mal";
var second = "Zoe";
var pilot = "Wash";
var companion = "Inara";
var mercenary = "Jayne";
var mechanic = "Kaylee";

// your code goes here
var crew = [captain, second, pilot, companion, mercenary, mechanic];

console.log(crew);

/*
Instruções:
Iniciando com esta array de prices, altere o preço do 1º, 3º e 7º elementos na array.

var prices = [1.23, 48.11, 90.11, 8.50, 9.99, 1.00, 1.10, 67.00];
DICA: o 1º elemetno de qualquer array possui como índice o 0.

Depois, imprima a array prices no console.
*/

var prices = [1.23, 48.11, 90.11, 8.50, 9.99, 1.00, 1.10, 67.00];

// your code goes here
prices[0] = 1.3;
prices[2] = 90.50;
prices[6] = 1.50;

console.log(prices);

/*
Instruções:
James estava criando uma array com as cores do arco-íris, e ele esqueceu algumas cores. As cores padrão de um arco-íris são normalmente listadas nesta ordem:

var rainbow = ["Red", "Orange", "Yellow", "Green", "Blue", "Purple"];
mas James tinha isto:

var rainbow = ["Red", "Orange", "Blackberry", "Blue"];
Usando somente o método splice(), insira as cores que faltam na array e remova a cor "Blackberry", seguindo estes passos:

Remova "Blackberry"
Adicione "Yellow" e "Green"
Adicione "Purple"
*/

var rainbow = ['Red', 'Orange', 'Blackberry', 'Blue'];

// your code goes here
rainbow.splice(2, 1, "Yellow", "Green");
rainbow.splice(4, 1, "Blue", "Purple");

console.log(rainbow);

/*
No Romance de Harry Potter, as crianças que frequentam a Escola de Bruxaria e Feitiçaria de Hogwarts pertencem a uma das quatro casas: Gryffindor, Hufflepuff, Ravenclaw ou Slytherin. Todo ano, as casas montam um time de quadribol de sete jogadores para competir na cobiçada Copa de Quadribol.

Considere a seguinte array:

var team = ["Oliver Wood", "Angelina Johnson", "Katie Bell", "Alicia Spinnet", "George Weasley", "Fred Weasley", "Harry Potter"];
Instruções:
Crie uma função chamada hasEnoughPlayers(), que recebe a array team como argumento e retorna true ou false, dependendo de a array ter pelo menos sete jogadores.
*/

// your code goes here
var team = ["Oliver Wood", "Angelina Johnson", "Katie Bell", "Alicia Spinnet", "George Weasley", "Fred Weasley", "Harry Potter"];
console.log(hasEnoughPlayers(team));

function hasEnoughPlayers(team){
    if(team.length >= 7){
        return true;
    }else{
        return false;
    }
}

/*
Instruções:
Em um exercício anterior, você criou a array crew para representar a tripulação de Mal, do programa de TV Firefly.

var captain = "Mal";
var second = "Zoe";
var pilot = "Wash";
var companion = "Inara";
var mercenary = "Jayne";
var mechanic = "Kaylee";

var crew = [captain, second, pilot, companion, mercenary, mechanic];
Mais no tarde, Mal recebe três novos membros de tripulação, chamados "Simon", "River" e "Book". Use o método push() para adicionar os três novos membros à array crew.

var doctor = "Simon";
var sister = "River";
var shepherd = "Book";
*/

var captain = "Mal";
var second = "Zoe";
var pilot = "Wash";
var companion = "Inara";
var mercenary = "Jayne";
var mechanic = "Kaylee";

var crew = [captain, second, pilot, companion, mercenary, mechanic];

var doctor = "Simon";
var sister = "River";
var shepherd = "Book";

// your code goes here
crew.push(doctor);
crew.push(sister);
crew.push(shepherd);

console.log(crew);

/*
Instruções:
Use o método forEach() para fazer o loop sobre a seguinte array e adicione 100 para cada um dos valores se o valor for divisível por 3. Imprima o array test no console.

var test = [12, 929, 11, 3, 199, 1000, 7, 1, 24, 37, 4, 19, 300, 3775, 299, 36, 209, 148, 169, 299, 6, 109, 20, 58, 139, 59, 3, 1, 139];
*/

var test = [12, 929, 11, 3, 199, 1000, 7, 1, 24, 37, 4,
    19, 300, 3775, 299, 36, 209, 148, 169, 299,
    6, 109, 20, 58, 139, 59, 3, 1, 139
];

// Write your code here
test.forEach(function(num){
    if(num % 3 === 0){
        var index = test.indexOf(num);
        num += 100
        test.splice(index, 1, num);
    }
});

console.log(test);

/*
Instruções:
Use o método map() para receber a array de montantes de dinheiro mostrada abaixo e crie uma segunda array, chamada totals, que mostra os montantes de dinheiro com 15% de gorjeta adicionado.

var bills = [50.23, 19.12, 34.01, 100.11, 12.15, 9.90, 29.11, 12.99, 10.00, 99.22, 102.20, 100.10, 6.77, 2.22];
Imprima a nova array totals usando console.log.

DICA: verifique o método toFixed() para números para ajudar com arredondamento de valores para um máximo de duas casas decimais. Observe que o método retorna uma string para manter o formato "fixo" do número. Então, se você quiser converter a string de volta para um número, pode fazer um cast dela ou converte-la de volta para um número:

Number("1");
Retorna: 1
*/

var bills = [50.23, 19.12, 34.01,
    100.11, 12.15, 9.90, 29.11, 12.99,
    10.00, 99.22, 102.20, 100.10, 6.77, 2.22
];

var totals = bills.map(function(value){
    value *= 1.15;
    return Number(value.toFixed(2));
});

console.log(totals);

/*
Instruções:
Use um loop de repetição for aninhado para receber a array numbers abaixo e substituir todos os valores que são divisíveis por 2 (números pares) pela string "even", e todos os outros números, pela string "odd".


var numbers = [
    [ 243, 12, 23, 12, 45, 45, 78, 66, 223, 3 ],
    [ 34, 2, 1, 553, 23, 4, 66, 23, 4, 55 ],
    [ 67, 56, 45, 553, 44, 55, 5, 428, 452, 3 ],
    [ 12, 31, 55, 445, 79, 44, 674, 224, 4, 21 ],
    [ 4, 2, 3, 52, 13, 51, 44, 1, 67, 5 ],
    [ 5, 65, 4, 5, 5, 6, 5, 43, 23, 4424 ],
    [ 74, 532, 6, 7, 35, 17, 89, 43, 43, 66 ],
    [ 53, 6, 89, 10, 23, 52, 111, 44, 109, 80 ],
    [ 67, 6, 53, 537, 2, 168, 16, 2, 1, 8 ],
    [ 76, 7, 9, 6, 3, 73, 77, 100, 56, 100 ]
   ];
*/

var numbers = [
    [243, 12, 23, 12, 45, 45, 78, 66, 223, 3],
    [34, 2, 1, 553, 23, 4, 66, 23, 4, 55],
    [67, 56, 45, 553, 44, 55, 5, 428, 452, 3],
    [12, 31, 55, 445, 79, 44, 674, 224, 4, 21],
    [4, 2, 3, 52, 13, 51, 44, 1, 67, 5],
    [5, 65, 4, 5, 5, 6, 5, 43, 23, 4424],
    [74, 532, 6, 7, 35, 17, 89, 43, 43, 66],
    [53, 6, 89, 10, 23, 52, 111, 44, 109, 80],
    [67, 6, 53, 537, 2, 168, 16, 2, 1, 8],
    [76, 7, 9, 6, 3, 73, 77, 100, 56, 100]
];

// your code goes here
for(var r = 0; r < numbers.length; r++){
    for(var c = 0; c < numbers[r].length; c++){
        if(numbers[r][c] % 2 === 0){
            numbers[r].splice(c, 1, "even");
        }else{
            numbers[r].splice(c, 1, "odd");
        }
    }
}

console.log(numbers);



