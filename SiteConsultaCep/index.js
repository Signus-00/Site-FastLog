
// Sistema CEP//

function pesquisacep(cep) {
    let cepfinal = cep
    let validacep = /^[0-9]{8}$/



    if (cepfinal != "") {
        if (validacep.test(cepfinal)) {
            let script = document.createElement('script')
            script.src = 'https://viacep.com.br/ws/'+ cepfinal +'/json/?callback=callback_name'
            document.body.appendChild(script)
    
        }
        else {
            alert('CEP inválido')
            limparcampos()
        }
    }
    else {
        limparcampos()
    }
}

function callback_name(objetocep) {
        document.getElementById('rua').value = (objetocep.logradouro)
        document.getElementById('bairro').value = (objetocep.bairro)
        document.getElementById('cidade').value = (objetocep.localidade)
        document.getElementById('uf').value = (objetocep.uf)
    }

function limparcampos() {
    document.getElementById('pedido').value = ""
    document.getElementById('cep').value = ""
    document.getElementById('rua').value = ""
    document.getElementById('bairro').value = ""
    document.getElementById('cidade').value = ""
    document.getElementById('uf').value = ""
    document.getElementById('nome').value = ""
}



// funcion incluir registro //
function IncluirRegistro() {
    let pedido = document.getElementById('pedido').value ="12345678"
    let nomeUsuario = document.getElementById('nome').value
    let cepUsuario = document.getElementById('cep').value
    let ruaUsuario = document.getElementById('rua').value
    let bairroUsuario = document.getElementById('bairro').value
    let cidadeUsuario = document.getElementById('cidade').value
    let ufUsuario = document.getElementById('uf').value 
    let situacao = document.getElementById('situacao').value ="Em rota de Entrega"
    let entrega = document.getElementById('entrega').value ="08/12/2022"
    let rastreio = document.getElementById('rastreio').value ="011101110"

    if (nomeUsuario != "") {
        let tabela = document.getElementById('tabelaUsuarios')
        let numeroLinhas = tabela.rows.lenght
        let linha = tabela.insertRow(numeroLinhas)
        let campo1 = linha.insertCell(0)
        let campo2 = linha.insertCell(1)
        let campo3 = linha.insertCell(2)
        let campo4 = linha.insertCell(3)
        let campo5 = linha.insertCell(4)
        let campo6 = linha.insertCell(5)
        let campo7 = linha.insertCell(6)
        let campo8 = linha.insertCell(7)
        let campo9 = linha.insertCell(8)
        let campo10 = linha.insertCell(9)
        let campo11 = linha.insertCell(10)

        campo1.innerHTML = pedido
        campo2.innerHTML = nomeUsuario
        campo3.innerHTML = cepUsuario
        campo4.innerHTML = ruaUsuario
        campo5.innerHTML = bairroUsuario
        campo6.innerHTML = cidadeUsuario
        campo7.innerHTML = ufUsuario
        campo8.innerHTML = situacao
        campo9.innerHTML = entrega
        campo10.innerHTML = rastreio
        campo11.innerHTML = "<button class='btn btn-outline-warning' onclick='removerLinha(this)'>Pedido Concluído</button>"
        
        document.getElementById('nome').value = ""
        document.getElementById('cep').value = ""
        document.getElementById('rua').value = ""
        document.getElementById('bairro').value = ""
        document.getElementById('cidade').value = ""
        document.getElementById('uf').value = ""
        document.getElementById('situacao').value = ""
        document.getElementById('entrega').value = ""
        document.getElementById('rastreio').value = ""
    }
    else {
        alert('Nome Inválido')
    }
}

function removerLinha(linha) {
let i = linha.parentNode.parentNode.rowIndex 
document.getElementById('tabelaUsuarios').deleteRow(i)
alert('Entrega Concluída com Sucesso')
}

