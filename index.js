const express = require('express')
const app = express()
const cors = require('cors')
const middlewareCors = cors()
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()
const port = process.env.PORT || 4000
const eventRouter = require('./event/router')

app.use(middlewareCors)
app.use(jsonParser)
app.use(eventRouter)

app.get('/test', (req, res) => res.send("This API is working accordingly"))
app.listen(port, () => console.log(`Listening on port ${port}`))