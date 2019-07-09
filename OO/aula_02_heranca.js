/**
 * Aula 02 - Herança JavaScript
 */

/*
Com a utilização de protótipos em JavaScript é possível criar classes de objetos "filhos" (construtores) que herdam características das suas classes "pais". 
*/

//Para a explicação de herança será utilizada a função de construtor Person()

function Person(first, last, age, gender, interests) {

    this.name = {
      'first': first,
      'last' : last
    }

    this.age = age

    this.gender = gender

    this.interests = interests
}

Person.prototype.bio = function() {   

    var string = this.name.first + ' ' + this.name.last + ' is ' + this.age + ' years old. '
    
    var pronoun
    
    if(this.gender === 'male' || this.gender === 'Male' || this.gender === 'm' || this.gender === 'M') {

      pronoun = 'He likes '
    } else if(this.gender === 'female' || this.gender === 'Female' || this.gender === 'f' || this.gender === 'F') {

      pronoun = 'She likes '
    } else {

      pronoun = 'They like '
    }

    string += pronoun

    if(this.interests.length === 1) {

      string += this.interests[0] + '.'
    } else if(this.interests.length === 2) {

      string += this.interests[0] + ' and ' + this.interests[1] + '.'
    } else {

      for(var i = 0; i < this.interests.length; i++) {

        if(i === this.interests.length - 1) {

          string += 'and ' + this.interests[i] + '.'
        } else {

          string += this.interests[i] + ', '
        }
      }
    }

    console.log(string)
}

Person.prototype.greeting = function() {

    console.log('Hi! I\'m ' + this.name.first + '.')
}

Person.prototype.bye = function() {

    console.log(this.name.first + ' has left the building. Bye for now!');
}

//Caso fosse necessário a criação de uma classe Teacher() que herde características de Person()

function Teacher(first, last, age, gender, interests, subject) {

    Person.call(this, first, last, age, gender, interests);
  
    this.subject = subject;
}

//Isso é similar ao construtor Person em muitos aspectos, mas a diferença aqui é a função call(). Esta função basicamente permite chamar uma função definida em algum outro lugar, mas no contexto atual. 

//O primeiro parâmetro especifica o valor this que você deseja usar ao executar a função, e os outros parâmetros são aqueles que devem ser passados ​​para a função quando ela é invocada.

//Como o construtor Teacher() deve ter os mesmos parâmetros que o construtor Person() do qual ele está herdando, é necessário especificar todos eles como parâmetros na chamada call().

//A última linha dentro do construtor simplesmente define a nova propriedade subject que os professores terão, que pessoas genéricas não possuem.

//Tudo parece bem até agora, mas existe um problema. Ao definir um novo construtor, ele tem uma propriedade prototype, que por padrão apenas contém uma referência à própria função construtora. Não contém os métodos da propriedade prototype do construtor Person. 

//Para ver isso, basta inserir Object.getOwnPropertyNames(Teacher.prototype) no console JavaScript. Em seguida, inserir novamente substituindo Teacher por Person. O novo construtor também não herda os métodos. 

//Para que Teacher() herde os métodos definidos no protótipo Person() é necessário utilizar o create()
Teacher.prototype = Object.create(Person.prototype)

//Neste caso, o create() está sendo usando para criar um novo objeto e torná-lo o valor de Teacher.prototype. O novo objeto tem o Person.prototype como protótipo e, portanto, herdará, se e quando necessário, todos os métodos disponíveis de Person.prototype.

//Depois de adicionar a última linha, a propriedade constructor Teacher.prototype agora é igual a Person(), porque apenas foi definido Teacher.prototype como referência de um objeto que herda suas propriedades de Person.prototype. Para que esse problema seja resolvido o seguinte trecho de código deve ser inserido

Object.defineProperty(Teacher.prototype, 'constructor', { 
    value: Teacher, 
    enumerable: false,
    writable: true 
})

//Agora, ao salvar e atualizar, a entrada Teacher.prototype.constructor deve retornar Teacher(), como desejado, e agora Teacher() está herdando Person()

//Chamando um construtor e criando uma nova instância de objeto

var teacher1 = new Teacher("Othon", "Godoy", 21, "male", ["music", "programming"], "programming")

//O trecho de código abaixo cria um novo método greeting()

Teacher.prototype.greeting = function() {
  var prefix

  if (this.gender === 'male' || this.gender === 'Male' || this.gender === 'm' || this.gender === 'M') {

    prefix = 'Mr.'
  } else if (this.gender === 'female' || this.gender === 'Female' || this.gender === 'f' || this.gender === 'F') {

    prefix = 'Mrs.'
  } else {

    prefix = 'Mx.'
  }

  console.log('Hello. My name is ' + prefix + ' ' + this.name.last + ', and I teach ' + this.subject + '.')
}

//Chamando um construtor e criando uma nova instância de objeto

var teacher2 = new Teacher("Amanda", "Fernandes", 21, "female", ["music", "movies"], "history")





