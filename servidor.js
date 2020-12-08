const express = require('express')
const servidor = express()
const router = express.Router()
const fs = require('fs')

servidor.use(express.json({extended:true}))
servidor.use(router)

const lerDados = () => {
    const content = fs.readdirSync('dados.json','utf-8')
    return JSON.parse(content)
}

const addDados = (atual)  => {
    const novo = JSON.stringify(atual)
    fs.writeFileSync('dados.json',novo,'utf-8')
    return novo
}


router.get('/',(req,res)=>{
    const content = lerDados()
    res.send(JSON.parse(content))
})

router.post('/',(req,res)=>{
    const {tarefa} = req.body
    addDados({tarefa})
    res.send(true)

})


servidor.listen(8080,()=>{
    console.log('rodando servidor')
})

