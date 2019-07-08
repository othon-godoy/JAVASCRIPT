/**
 * Aula 00 - Introdução à Orientação a Objetos em JavaScript
 */

/*
JavaScript usa funções especiais chamadas funções de construtor para definir e inicializar objetos e seus recursos. As classes em JavaScript nada mais são do que funções
*/

//Abaixo é um exemplo de como seria possível definir uma pessoa com uma função normal.
function createNewPerson(name) {

    var obj = {}
    obj.name = name
    obj.greeting = function() {

        console.log("Hi!, I'm " + obj.name)        
    }

    return obj
}

//Agora poderia ser criada uma nova pessoa chamando esta função
var othon = createNewPerson("Othon")
othon.name
othon.greeting

//Apesar do código acima funcionar bem, ele é longo e pouco prático. Sendo assim, o mesmo processo poderia ser feito utilizando funções de construtor, tornando tudo mais simples
function Person(name) {

    this.name = name
    this.greeting = function() {

        console.log("Hi!, I am " + this.name)
    }
}

//A função construtora é a versão do JavaScript de uma classe. É possível notar que ela tem todos os recursos que são esperados de uma função, embora ela não retorne nada ou crie explicitamente um objeto, ela basicamente define propriedades (atributos) e métodos. 

//O código abaixo é um exemplo de como a classe criada anteriormente poderia ser reescrita utilizando a notação de classe do ES6 
class Person {
    
    constructor() {

        this.name = name;
        this.greeting = function () {
            console.log("Hi!, I'm " + this.name);
        };
    }
}

//Chamando um construtor e criando uma nova instância de objeto
var person1 = new Person('Othon');
var person2 = new Person('Godoy');