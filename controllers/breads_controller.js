const express = require('express')
const breads = express.Router()
const Bread = require('../models/bread.js')

//index (landing page)
breads.get('/', (req, res) =>{
  Bread.find()
    .then(foundBreads => {
      res.render('index', {
        breads: foundBreads,
        title: 'Index Page'
      })
      console.log(foundBreads)
    })
    // res.render('Index',
    // {
    //     breads: Bread,
    //     title: 'Index Page'
    // })
})
//new
breads.get('/new', (req, res) => {
    res.render('new')
})

 //Edit
 breads.get('/:indexArray/edit', (req, res) => {
    res.render('edit', {
        bread: Bread[req.params.indexArray],
        index: req.params.indexArray
    })
  })
  
//show
breads.get('/:id', (req, res) => {
  Bread.findById(req.params.id)
  .then(foundBread => {
    res.render('show', {
      bread: foundBread
    })
  })
    .catch(err => {
      res.send('404')
    })
})

// CREATE
breads.post('/', (req, res) => {
    if (!req.body.image) {
      req.body.image = undefined
      //'https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
    }
    if(req.body.hasGluten === 'on') {
      req.body.hasGluten = true
    } else {
      req.body.hasGluten = false
    }
    Bread.create(req.body)
    res.redirect('/breads')
  })

  //update
  breads.put('/:arrayIndex', (req, res) => {
    if(req.body.hasGluten === 'on') {
        req.body.hasGluten = true
    } else {
        req.body.hasGluten = false
    }
    Bread[req.params.arrayIndex] = req.body
    res.redirect(`/breads/${req.params.arrayIndex}`)
  })

 

  //delete
  breads.delete('/:indexArray', (req, res) => {
    Bread.splice(req.params.indexArray, 1)
    res.status(303).redirect('/breads')
  })

module.exports = breads