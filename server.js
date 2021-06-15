const express = require('express')
const path = require('path')
const Rollbar = require('rollbar')

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/main/index.html'))
    // rollbar.info('html file served succesfully')
})












const port = process.env.PORT || 4343
app.listen(port, () => {
    console.log(`running on port: ${port}`)
})