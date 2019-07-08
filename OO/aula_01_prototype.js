/**
 * Aula 01 - Prototipação de Objetos
 */

/*
Protótipos são o mecanismo pelo qual objetos JavaScript herdam recursos uns dos outros. O JavaScript é frequentemente descrito como uma linguagem baseada em protótipos. Para fornecer herança, os objetos podem ter um objeto de protótipo, que atua como um objeto de modelo do qual herda métodos e propriedades.
*/

//Para a explicação de protótipos será utilizada a função de construtor Person()
function Person(first, last, age, gender, interests) {

    this.name = {
      'first': first,
      'last' : last
    }

    this.age = age

    this.gender = gender

    this.interests = interests

    this.bio = function() {   

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

      console.log(string);
    }

    this.greeting = function() {
      console.log('Hi! I\'m ' + this.name.first + '.')
    }
}

//Chamando um construtor e criando uma nova instância de objeto
var person1 = new Person('Othon', 'Godoy', 21, 'male', ['music', 'programming'])

//Para conferir as propriedades de protótipos existentes para a classe, basta inserir o seguinte no console JavaScript. A saída não mostrará muito porque não foi definido nada no protótipo do construtor personalizado
Person.prototype

//A seguir um exemplo de modificação da propriedade prototype de uma função de construtor, os métodos adicionados ao protótipo estão disponíveis em todas as instâncias de objetos criadas a partir do construtor.
Person.prototype.bye = function() {

    console.log(this.name.first + ' has left the building. Bye for now!');
}

//Ao chamar o método bye é exibida uma mensagem com o nome da pessoa, conforme definido dentro do construtor. Isso é realmente útil, mas o que é ainda mais útil é que toda a cadeia de herança foi atualizada dinamicamente, disponibilizando automaticamente esse novo método em todas as instâncias de objeto derivadas do construtor Person().

//Chamando um construtor e criando uma nova instância de objeto
var person2 = new Person('Amanda', 'Fernandes', 22, 'female', ['music', 'movies'])

//Adicionando um novo atributo ao construtor Person()
Person.prototype.fullName = this.name.first + ' ' + this.name.last

//Ao chamar esse novo atributo o resultado é undefined. Isso funcionou bem no método definido anteriormente no protótipo, porque ele está dentro de um escopo de função, que será transferido com êxito para o escopo da instância do objeto. Já com uma propriedade não funciona, pois this será referência ao escopo global neste caso, não ao escopo da função. 

//Por isso um padrão bastante comum para mais definições de objetos é definir as propriedades dentro do construtor e os métodos no protótipo. Isso torna o código mais fácil de ler, pois o construtor contém apenas as definições de propriedade e os métodos são divididos em blocos separados. 

//Exemplo de definição de objetos
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

//Chamando um construtor e criando uma nova instância de objeto
var person1 = new Person('Othon', 'Godoy', 21, 'male', ['music', 'programming'])

//Chamando um construtor e criando uma nova instância de objeto
var person2 = new Person('Amanda', 'Fernandes', 22, 'female', ['music', 'movies'])

//Foi possível confirmar que os métodos funcionaram corretamente mesmo sendo inseridos por meio dos protótipos