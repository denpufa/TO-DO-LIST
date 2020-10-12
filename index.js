const botaoCadastrar = document.querySelector("form button")
const descricao = document.querySelector("form #descricao")
const prazo = document.querySelector("form #prazo")
const encarregado = document.querySelector("form #encarregado")
const ul = document.querySelector("ul")



botaoCadastrar.onclick = ev  =>  {
    ev.preventDefault()
    if(descricao.nodeValue && prazo.nodeValue && encarregado.nodeValue){ 
        
        const texto = document.createElement('span')
        texto.innerHTML = $(descricao.nodeValue) + " " + $(prazo.nodeValue) +  " " +  $(encarregado.nodeValue)
        const botao = document.createElement('button')
        botao.innerHTML = 'remover'
        
        const li = document.createElement("li")
        li.appendChild(texto)
        li.appendChild(botao)
        
        ul.appendChild(li)
        
        descricao.nodeValue = ""
        prazo.nodeValue = ""
        encarregado.nodeValue = ""
    }
}