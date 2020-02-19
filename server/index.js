const express = require('express')

const app = express()

app.set('secret', 'xxtiyubu')

app.use(express.json())
app.use(require('cors')())

app.use('/admin', express.static(__dirname + '/admin'))
app.use('/uploads', express.static(__dirname + '/uploads'))
app.use('/', express.static(__dirname + '/web'))

require('./plugins/db')(app)
require('./routes/web')(app)
require('./routes/admin')(app)

app.listen(3000, () => {
    console.log('http://localhost:3000')
})
