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
items = []

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/main/index.html'))
    rollbar.info('html file served succesfully')
})

app.get('/js', (req, res) => {
    express.static('./main/main.js')
})

app.post('/api/grocery', (req, res) => {
    let {item} = req.body
    // addItem(item)
    // items.push(item)
    // rollbar.log('gorcery item added successfully')
    // res.status(200).send(items)
    const index = items.findIndex((itemName) => {
        itemName === item
    })

    if (index === -1 && item !== '') {
        items.push(item)
        rollbar.log('item added successfully')
        res.status(200).send(items)
    } else if (item === '') {
        rollbar.error(`item not given`)
        res.status(400).send('must provide a list item')
    } else {
        rollbar.error('already have this item')
        res.status(400).send('this item is already in this list')
    } 
})

const port = process.env.PORT || 4343
app.use(rollbar.errorHandler())

app.listen(port, () => {
    console.log(`running on port: ${port}`)
})