const express = require('express')
const app = express()
const port = 3000

app.use(express.static('./'))

app.get('/', (req, res) => {
	res.status(200).send('index.html');
})

app.listen(port, () => console.log(`Ouvindo porta: ${port}!`))