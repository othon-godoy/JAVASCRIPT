class Calc_Controller{
	constructor(){
        //É necessário usar a palavra reservada 'this' para que o valor armazenado no atributo possa ser utilizado em qualquer lugar da classe. Não seria possível isso com a palavra reservada 'var' pois ela estaria presa no escopo do construtor

        //O JavaScript não possui bem definidos os controles de acesso de um atributo. Portanto, por convenção, é usado um _ antes dos nomes de atributos que seriam do tipo private
        this._displayCalc = "0";
        this._currentDate;  
        this.initialize();      
    }

    initialize(){
        let displayCalcEl = document.querySelector("#display");
        let dateEl = document.querySelector("#data");
        let timeEl = document.querySelector("#hora");

        displayCalcEl.innerHTML = "4567";
        dateEl.innerHTML = "22:31";
        timeEl.innerHTML = "07/01/2019";
    }

    get displayCalc(){
        return this._displayCalc;
    }

    set displayCalc(valor){
        this._displayCalc = valor;
    }

    get currentDate(){
        return this._currentDate;
    }

    set currentDate(valor){
        this._currentDate = valor;
    }
}