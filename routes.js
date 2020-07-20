const express = require('express')
const routes = express.Router()
const instrutores = require('./controladores/instrutores') 
const membros = require('./controladores/membros') 

routes.get('/', function(req, res) {
    return res.redirect("/instrutores")
})
routes.get('/membros', membros.index)
routes.get('/membros/create', membros.create)
routes.get('/membros/:id', membros.show)
routes.get('/membros/:id/edit', membros.edit)
routes.post("/membros", membros.post)
routes.put("/membros", membros.put)
routes.delete("/membros", membros.delete)
routes.get('/instrutores', instrutores.index)
routes.get('/instrutores/create', instrutores.create)
routes.get('/instrutores/:id', instrutores.show)
routes.get('/instrutores/:id/edit', instrutores.edit)
routes.post("/instrutores", instrutores.post)
routes.put("/instrutores", instrutores.put)
routes.delete("/instrutores", instrutores.delete)





module.exports = routes