const express = require('express')
const app = express()

const port = process.env.PORT || 3000;

app.use(express.static('views'))

app.listen(port, console.log('server started on ' + port))