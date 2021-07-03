require('dotenv').config()
const express = require('express')
const morgan  = require('morgan')
const cors    = require('cors')
const helmet  = require('helmet')

const authRoute = require('./routes/authRoutes')
const moviesRoute = require('./routes/moviesRoutes')
const rolesRoutes = require('./routes/rolesRoutes')
const addressesRoutes = require('./routes/addressesRoutes')
const contactsRoutes = require('./routes/contactsRoutes')
const usersRoutes = require('./routes/usersRoutes')

const notFound = require('./middlewares/notFound')
const errorHandler = require('./middlewares/ErrorHandler')
const connectDB = require('./middlewares/connectDB')

connectDB()

const app = express()

app.use(morgan('dev'))
app.use(cors())
app.use(helmet())
app.use(express.json());

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.status(200).send('<h1>It works !</h1>')
})

app.use('/', authRoute)
app.use('/movies', moviesRoute)
app.use('/roles', rolesRoutes)
app.use('/addresses', addressesRoutes)
app.use('/contacts', contactsRoutes)
app.use('/users', usersRoutes)

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server listen on http://localhost:${PORT}`)
})