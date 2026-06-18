const http = require('http')

app.get('/', (req, res) => {
    res.send('Hello From Express')
})



const server = app.listen(5000, () => {
    console.log('Server started, running test...')

    http.get('http://localhost:5000/', (res) => {
        console.log(`Status: ${ res.statusCode }`);
    })
})