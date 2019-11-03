class UserController {

    constructor(formId, tableId) {

        this.formEl = document.getElementById(formId)
        this.tableEl = document.getElementById(tableId)

        this.onSubmit()
    }

    onSubmit() { 

        //ao usar uma arrow function o escopo da função não muda
        this.formEl.addEventListener("submit", event => {

            //cancela o comportamento padrão do evento
            event.preventDefault()
        
            //usar apenas o this iria referenciar o formEl ao invés da classe
            let user = this.getValues()

            this.addLine(user)
        })
    }

    getValues() {  
        
        let user = {};

        //collection HTML foi convertida para array e o spread (...) foi usado para sinalizar que o foreach deverá percorrer todas as posições do array
        [...this.formEl.elements].forEach(function(field, index){

            if(field.name == "gender") {
        
                if(field.checked) user[field.name] = field.value                
        
            } else {
        
                user[field.name] = field.value
            }
        })        

        return new User(
            user.name, 
            user.gender, 
            user.birth, 
            user.country, 
            user.email, 
            user.password, 
            user.photo, 
            user.admin
        )
    }

    addLine(dataUser) {    
    
        this.tableEl.innerHTML = `
            <tr>
                <td><img src="dist/img/user1-128x128.jpg" alt="User Image" class="img-circle img-sm"></td>
                <td>${dataUser.name}</td>
                <td>${dataUser.email}</td>
                <td>${dataUser.admin}</td>
                <td>${dataUser.birth}</td>
                <td>
                <button type="button" class="btn btn-primary btn-xs btn-flat">Editar</button>
                <button type="button" class="btn btn-danger btn-xs btn-flat">Excluir</button>
                </td>
            </tr>
        `   
    }
}