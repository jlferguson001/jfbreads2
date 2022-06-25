// DEPENDENCIES
const express = require('express')
const methodOverride = require('method-override')
const mongoose = require('mongoose')
  
// CONFIGURATION
require('dotenv').config()
const PORT = process.env.PORT
const app = express()

//connect to mongoose database - has to be under the .env items
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true},
  () => { console.log('Connected to mongo: ', process.env.MONGO_URI) }
  )


//middleware - two _ infront of dirname. Where issue came to crash and i couldn't figure out

app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))

// ROUTES
app.get('/', (req, res) => {
  res.send('Welcome to an Awesome App about Breads!')
})

//Breads
const breadsController = require('./controllers/breads_controller.js')
app.use('/breads', breadsController)

// LISTEN
app.listen(PORT, () => {
  console.log('nomming at port', PORT);
})

//404 page
app.get('*', (req, res) => {
    res.send('404')
})
 