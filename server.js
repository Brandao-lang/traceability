const express = require('express')
const path = require('path')
const Rollbar = require('rollbar')

let rollbar = new Rollbar({
  accessToken: 'a06c47ae87384bff85eeccb0d3a99961',
  captureUncaught: true,
  captureUnhandledRejections: true
});

rollbar.log("Hello world!");

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