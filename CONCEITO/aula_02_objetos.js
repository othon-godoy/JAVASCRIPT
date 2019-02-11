//Objetos possuem atributos, que são propriedades, e métodos, que são ações.

var car = {
    marca: "Nissan",
    tipo: "SUV",
    modelo: "Kicks",
    cor: "Cinza",
    ano: 2019,
    espec: function(){
        return this.marca + " " + this.modelo + " " + this.ano; 
    }    
};

//A palavra-chave this refere-se ao proprietário da função.

//É possível acessar as propriedades e métodos do objeto de maneiras diferentes.

var marca = car.marca;
var modelo = car["modelo"];
var espec = car.espec();