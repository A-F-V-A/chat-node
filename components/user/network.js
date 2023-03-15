const express   = require('express')
const response  = require('../../network/response')
const controller = require('./controller')

const router    = express.Router()

router.get('/',(req,res) =>{
    const { name } = req.query

    controller.getUser(name)
        .then(data => response.success(req,res,200,data))
        .catch(err => response.error(req,res,500,err) )
    
})

router.post('/',(req,res) =>{

    const { body } = req
    
    controller.addUser(body.name)
        .then(data => response.success(req,res,201,data))
        .catch(() => response.error(req,res,400,'Informacion invalida'))
        
})

router.patch('/:id', (req,res) =>{
    const { id }    = req.params
    const { name }  = req.body
    controller.uptUser(id,name)
        .then( data => response.success(req,res,200,data) )
        .catch(e => response.error(req,res,500,'Error interno'))
})

router.delete('/:id',(req,res) =>{
    const { id } = req.params
    controller.delUser(id)
        .then((data) => response.success(req,res,200,`Menssage ${data} Eliminado con exito`))
        .catch((e) => response.error(req,res,400,e))
})

module.exports = router