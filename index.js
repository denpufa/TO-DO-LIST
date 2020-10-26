const botaoCadastrar = document.getElementById('botao_cadastrar')
const descricao = document.getElementById('descricao')
const prazo = document.getElementById('prazo')
const encarregado = document.getElementById('encarregado')
const ul = document.getElementById('a_fazer')



botaoCadastrar.onclick = ev  =>  {
    ev.preventDefault()
    if(descricao.value && prazo.value && encarregado.value){ 
        
        const texto = document.createElement('span')
        texto.innerHTML = descricao.nodeValue + " " + prazo.nodeValue +  " " +  encarregado.nodeValue
        const botao = document.createElement('button')
        botao.innerHTML = 'remover'
        
        const li = document.createElement("li")
        li.appendChild(texto)
        li.appendChild(botao)
        
        ul.appendChild(li)
        botao.onclick = () => {
            ul.removeChild(li)

            
        }
        
        descricao.value = ""
        prazo.value = ""
        encarregado.value = ""
    }
}