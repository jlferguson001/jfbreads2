const express = require('express')
const breads = express.Router()
const Bread = require('../models/bread.js')
const Baker = require('../models/baker.js')

//index (landing page)
// Index:
breads.get('/', (req, res) => {
  Baker.find()
    .then(foundBakers => {
      Bread.find()
      .then(foundBreads => {
          res.render('index', {
              breads: foundBreads,
              bakers: foundBakers,
              title: 'Index Page'
          })
      })
    })
})

    // res.render('Index',
    // {
    //     breads: Bread,
    //     title: 'Index Page'
    // })

//new
breads.get('/new', (req, res) => {
  Baker.find()
  .then(foundBakers =>{
    res.render('new', {
      bakers: foundBakers
    })
  })
    
})

 //Edit
 breads.get('/:id/edit', (req, res) => {
    Baker.find()
      .then(foundBakers => {
        Bread.findById(req.params.id)
        .then(foundBread => {
          res.render('edit', {
            bread: foundBread,
            bakers: foundBakers
          })
        })
       
      })
 })
   
  
//show
breads.get('/:id', (req, res) => {
  Bread.findById(req.params.id)
  .populate('baker')
  .then(foundBread => {
    const bakedBy = foundBread.getBakedBy()
    console.log(bakedBy)
    res.render('show', {
      bread: foundBread
    })
  })
    // .catch(err => {
    //   res.send('404')
    // })
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
  breads.put('/:id', (req, res) => {
    if(req.body.hasGluten === 'on') {
        req.body.hasGluten = true
    } else {
        req.body.hasGluten = false
    }
    Bread.findByIdAndUpdate(req.params.id, req.body, { new: true })
      .then(updatedBread => {
        console.log(updatedBread)
        res.redirect(`/breads/${req.params.id}`)
      })
  })

 

  //delete
  breads.delete('/:id', (req, res) => {
    Bread.findByIdAndDelete(req.params.id) 
      .then(deletedBread => { 
        res.status(303).redirect('/breads')
      })
  })
  

module.exports = breads