const express = require('express')
const next = require('next')
const routes = require('./routes.js')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })

const handle = routes.getRequestHandler(app)

const mobxReact = require('mobx-react');

mobxReact.useStaticRendering(true);

app.prepare()
.then(() => {
    const server = express()

    server.use("/static", express.static(__dirname + '/static'));

    server.get('*', (req, res) => {
        return handle(req, res)
    })

    server.listen(8001, (err) => {
        if (err) throw err
        console.log('> Ready on http://localhost:8001')
    })
})
