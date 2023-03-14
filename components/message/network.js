/* Modulos */
const express   = require('express')
const response  = require('../../network/response')
const controller = require('./controller')

const router    = express.Router()



router.get('/',(req,res) =>{
    controller.ListMessage()
        .then(data => response.success(req,res,200,data))
        .catch(err => response.error(req,res,500,err) )
    
})


router.post('/',(req,res) =>{
    const { body } = req
    controller.addMessage(body.user,body.message)
        .then(data => response.success(req,res,201,data))
        .catch(() => response.error(req,res,400,'Informacion invalida'))
})

 router.patch('/:id', (req,res) =>{
    console(req.params.id)

 })





module.exports = router