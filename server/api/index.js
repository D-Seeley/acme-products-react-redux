const express = require('express')
const router = express.Router();
const { models } = require('../db')
const { product } = models

router.get('/', (req, res, next)=> {
   return product.findAll({})
        .then(products => res.json(products))
        .catch(next)
})

router.get('/products/:id', (req, res, next)=> {
    return product.findById(req.params.id)
        .then(product => res.json(product))
        .catch(next)
 })

router.delete('/products/:id', (req, res, next)=> {
    return product.destroy({where: { id : req.params.id }})
        .then(()=> res.sendStatus(200))
        .catch(next)
})

router.post('/', async (req, res, next)=> {
    return product.create(req.body)
    .then(_product => res.json(_product._previousDataValues))
    .catch(next)    
})

module.exports = router;