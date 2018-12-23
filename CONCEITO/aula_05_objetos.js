/*
Instruções:
Usando o exemplo guarda-chuva do vídeo anterior, veja se você consegue seguir o método exemplo open() e crie um método close(). Está tudo bem se você tiver problemas no início! Iremos entrar em maiores detalhes mais tarde nesta lição.

var umbrella = { 
  color: "pink",
  isOpen: false,
  open: function() { 
    if (umbrella.isOpen === true) {
      return "The umbrella is already opened!";
    } else {
      umbrella.isOpen = true;
      return "Julia opens the umbrella!";
    }
   }
};
DICA: Lembre-se de colocar todas as propriedades e métodos de seus objetos dentro de chaves: var myObject = { greeting: "hello", name: "Julia" };. Também, lembre-se que um objeto é apenas um outro tipo de dado. Assim como você colocaria um ponto-e-vírgula após uma declaração de variável string var myString = "hello";, não se esqueça de colocar um ponto-e-vírgula no fim da declaração de seu objeto.
*/

var umbrella = {
    color: "pink",
    isOpen: true,
    open: function() {
        if (umbrella.isOpen === true) {
            return "The umbrella is already opened!";
        } else {
            umbrella.isOpen = true;
            return "Julia opens the umbrella!";
        }
    },
    
    close: function(){
        if(umbrella.isOpen === false){
            return "The umbrella is already closed!";
        }else{
            umbrella.isOpen = false;
            return "Julia close the umbrella!";
        }
        
    }
};

/*
Instruções:
Crie um objeto breakfast para representar o seguinte item do menu:

The Lumberjack - $9.95
eggs, sausage, toast, hashbrowns, pancakes
O objeto deve conter propriedades para name, price e ingredients.
*/

// your code goes here
var breakfast = {
    name: "The Lumberjack",
    price: 9.95,
    ingredients: ["eggs", "sausage", "toast", "hashbrowns", "pancakes"]
};

/*
Instruções:
Usando o dado objeto:

var savingsAccount = {
  balance: 1000,
  interestRatePercent: 1,
  deposit: function addMoney(amount) {
    if (amount > 0) {
      savingsAccount.balance += amount;
    }
  },
  withdraw: function removeMoney(amount) {
    var verifyBalance = savingsAccount.balance - amount;
    if (amount > 0 && verifyBalance >= 0) {
      savingsAccount.balance -= amount;
    }
  }
};
adicione um método printAccountSummary() que retorne a seguinte mensagem de conta:

Welcome!
Your balance is currently $1000 and your interest rate is 1%.
*/

var savingsAccount = {
    balance: 1000,
    interestRatePercent: 1,
    deposit: function addMoney(amount) {
        if (amount > 0) {
            savingsAccount.balance += amount;
        }
    },
    withdraw: function removeMoney(amount) {
        var verifyBalance = savingsAccount.balance - amount;
        if (amount > 0 && verifyBalance >= 0) {
            savingsAccount.balance -= amount;
        }
    },
    // your code goes here
    printAccountSummary: function printAccount(){
        return "Welcome!\nYour balance is currently $" + savingsAccount.balance + 
        " and your interest rate is " + savingsAccount.interestRatePercent + "%.";
    }
};

console.log(savingsAccount.printAccountSummary());

/*
Instruções:
Crie um objeto chamado facebookProfile. O objeto deve ter três propriedades:

seu nome (name)
o número de amigos (friends) que você tem e
uma array de mensagens (messages) que você postou (como strings)
O objeto deve também possuir quatro métodos:

postMessage(message) - adiciona uma nova mensagem em formato de string na array
deleteMessage(index) - remove a mensagem correspondente ao índice fornecido
addFriend() - aumenta a contagem de amigos em 1
removeFriend() - diminui a contagem de amigos em 1
*/

// your code goes here
var facebookProfile = {
    name: "Othon Rafael",
    friends: 500,
    messages: [],
    postMessage: function postMessage(newMessage){
        facebookProfile.messages.push(newMessage);
    },
    deleteMessage: function deleteMessage(index){
        facebookProfile.messages.splice(index, 1);
    },
    addFriend: function addFriend(){
        facebookProfile.friends += 1;
    },
    removeFriend: function removeFriend(){
        facebookProfile.friends -= 1;
    }
  };

/*
Aqui está uma array de objetos donut.

var donuts = [
  { type: "Jelly", cost: 1.22 },
  { type: "Chocolate", cost: 2.45 },
  { type: "Cider", cost: 1.59 },
  { type: "Boston Cream", cost: 5.99 }
];
Instruções:
Use o método forEach() para fazer um loop sobre a array e imprima o seguinte resumo de donuts usando console.log.

Jelly donuts cost $1.22 each
Chocolate donuts cost $2.45 each
Cider donuts cost $1.59 each
Boston Cream donuts cost $5.99 each
*/

var donuts = [
    { type: "Jelly", cost: 1.22 },
    { type: "Chocolate", cost: 2.45 },
    { type: "Cider", cost: 1.59 },
    { type: "Boston Cream", cost: 5.99 }
];

// your code goes here
donuts.forEach(function(donuts){
    console.log(donuts.type + " donuts cost $" + donuts.cost + " each");
});