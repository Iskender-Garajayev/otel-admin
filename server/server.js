const express = require('express')
const userdatas = require('./data/userdata')

const app = express()

app.get('/', (req, res)=> {
    res.send('API is running...')
})

app.get('/api/userdatas', (req, res)=> {
    res.json(userdatas)
})

app.get('/api/userdatas/:id', (req, res)=> {
    const userdata = userdatas.find((p) => p._id === req.params.id)
    res.json(userdata)
})

app.listen(5000, console.log('Server running on port 5000'))