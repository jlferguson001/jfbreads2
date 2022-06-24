const { application } = require('express')
const express = require('express')
const breads = express.Router()
const Bread = require('../models/bread.js')

//index (landing page)
breads.get('/', (req, res) =>{
    res.render('Index',
    {
        breads: Bread,
        title: 'Index Page'
    })
})

//show
breads.get('/:arrayIndex', (req, res) =>{
    res.send(Bread[req.params.arrayIndex])
})

module.exports = breads