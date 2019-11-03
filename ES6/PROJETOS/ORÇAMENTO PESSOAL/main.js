class Despesa {   

    constructor(ano, mes, dia, tipo, descricao, valor) {
        this.ano = ano
        this.mes = mes
        this.dia = dia
        this.tipo = tipo
        this.descricao = descricao
        this.valor = valor
    }

    validarDados() {

        for(let i in this) {

            if(this[i] == undefined || this[i] == '' || this[i] == null) {
                return false
            }
        }

        return true
    }
}

class BD {

    constructor() {

        let id = localStorage.getItem('id')

        if(id === null) {

            localStorage.setItem('id', 0)
        }
    }

    autoIncrement() {

        let id = localStorage.getItem('id')  
        
        return parseInt(id) + 1
    }

    gravar(d) {
        
        let id = this.autoIncrement()

        localStorage.setItem(id, JSON.stringify(d))

        localStorage.setItem('id', id)
    }

    recuperarTodosRegistros() {

        let despesas = Array()

        let id = localStorage.getItem('id')

        for(let i = 1; i <= id; i++) {

            let despesa = localStorage.getItem(i)

            despesa = JSON.parse(despesa)

            if(despesa === null) {
                continue
            }
            
            despesa.id = i
            despesas.push(despesa)           
        }

        return despesas
    }

    pesquisar(despesa) {

        let despesasFiltradas = Array()

        despesasFiltradas = this.recuperarTodosRegistros()

        if(despesa.ano != '') {
            despesasFiltradas = despesasFiltradas.filter(d => d.ano == despesa.ano)
        }

        if(despesa.mes != '') {
            despesasFiltradas = despesasFiltradas.filter(d => d.mes == despesa.mes)
        }

        if(despesa.dia != '') {
            despesasFiltradas = despesasFiltradas.filter(d => d.dia == despesa.dia)
        }

        if(despesa.tipo != '') {
            despesasFiltradas = despesasFiltradas.filter(d => d.tipo == despesa.tipo)
        }

        if(despesa.descricao != '') {
            despesasFiltradas = despesasFiltradas.filter(d => d.descricao == despesa.descricao)
        }

        if(despesa.valor != '') {
            despesasFiltradas = despesasFiltradas.filter(d => d.valor == despesa.valor)
        }        

        despesasFiltradas.filter(d => d.mes == despesa.mes)

        despesasFiltradas.filter(d => d.dia == despesa.dia)

        return despesasFiltradas
    }

    remover(id) {
        localStorage.removeItem(id)
    }
}

let bd = new BD()

function cadastrarDespesa() {

    let ano         = document.getElementById('ano')
    let mes         = document.getElementById('mes')
    let dia         = document.getElementById('dia')
    let tipo        = document.getElementById('tipo')
    let descricao   = document.getElementById('descricao')
    let valor       = document.getElementById('valor')

    let despesa = new Despesa(
        ano.value,
        mes.value,
        dia.value,
        tipo.value,
        descricao.value,
        valor.value
    )  

    if(despesa.validarDados()) {

        bd.gravar(despesa)

        createModal(
            'modal-header text-success', 
            'Registro inserido com sucesso', 
            'Despesa cadastrada com sucesso', 
            'btn btn-success', 
            'Voltar'
        )      
        
        limpaCampos()

    }else{

        createModal(
            'modal-header text-danger', 
            'Erro ao inserir registro', 
            'Existem campos obrigatórios que não foram preenchidos', 
            'btn btn-danger', 
            'Voltar e corrigir'
        )   
    }
}

function createModal(modal_group, modal_titulo, modal_body, modal_button_class, modal_button_text) {

    $('#modal_group').removeClass()
    $('#modal_group').addClass(modal_group)
    $('#modal_titulo').html(modal_titulo)
    $('#modal_body').html(modal_body)

    $('#modal_button').removeClass()
    $('#modal_button').addClass(modal_button_class)
    $('#modal_button').html(modal_button_text)

    $('#modalRegistraDespesa').modal('show')
}

function limpaCampos() {

    document.getElementById('ano').value = ""
    document.getElementById('mes').value = ""
    document.getElementById('dia').value = ""
    document.getElementById('tipo').value = ""
    document.getElementById('descricao').value = ""
    document.getElementById('valor').value = ""
}

function carregaListaDespesas(despesas = Array(), filtro = false) {    

    if(despesas.length === 0 && filtro === false) {

        despesas = bd.recuperarTodosRegistros()
    }

    let listaDespesas = document.getElementById('listaDespesas')
    listaDespesas.innerHTML = ''

    despesas.forEach(function(d){
        
        let linha = listaDespesas.insertRow()
 
        linha.insertCell(0).innerHTML = `${d.dia}/${d.mes}/${d.ano}`

        switch(d.tipo) {
            case '1':
                d.tipo = 'Alimentação'
                break

            case '2':
                d.tipo = 'Educação'
                break

            case '3':
                d.tipo = 'Lazer'
                break
    
            case '4':
                d.tipo = 'Saúde'
                break

            case '5':
                d.tipo = 'Transporte'
                break
        }

        linha.insertCell(1).innerHTML = d.tipo
        linha.insertCell(2).innerHTML = d.descricao
        linha.insertCell(3).innerHTML = d.valor

        let btn = document.createElement("button")
        btn.className = 'btn btn-danger'
        btn.innerHTML = '<i class="fas fa-times"></i>'
        btn.id = `id_despesa_${d.id}`

        btn.onclick = function() {
            
            let id = this.id.replace('id_despesa_','') 
            
            bd.remover(id)

            window.location.reload()
        }

        linha.insertCell(4).append(btn)

        console.log(d)
    })    
}

function pesquisaDespesa() {
    
    let ano         = document.getElementById('ano').value
    let mes         = document.getElementById('mes').value
    let dia         = document.getElementById('dia').value
    let tipo        = document.getElementById('tipo').value
    let descricao   = document.getElementById('descricao').value
    let valor       = document.getElementById('valor').value

    let despesa = new Despesa(
        ano,
        mes,
        dia,
        tipo,
        descricao,
        valor
    )      

    despesas = bd.pesquisar(despesa)

    carregaListaDespesas(despesas, true)  
}

