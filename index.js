const express = require('express')
const app = express()
const port = 3000
const host = '0.0.0.0'
app.get('/', (req, res) => res.send('Hello World! 3'))
app.listen(port, host)