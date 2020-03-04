const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('<div style="max-width: 600px; margin: 0 auto"><h1>Welcome to Jenkins!</h1><p>If you see this page, the Jenkins web server is successfully installed and working. Further configuration is required.</p><p>Thank you for using Jenkins.</p></div>')
})

app.listen(port, () => {
  console.log('App is listening at http://localhost:' + port)
})

module.exports = app