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
    if (Bread[req.params.arrayIndex]) {
        res.render('Show', {
            bread:Bread[req.params.arrayIndex]
        })
    } else {
        res.send('404')
    }    
})

module.exports = breads