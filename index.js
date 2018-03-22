const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send({ hi: 'hello' })
});

const PORT = process.env.PORT || 6000;
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
});

