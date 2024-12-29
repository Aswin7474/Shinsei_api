const express = require('express');
const app = express();

port = 5000;

app.get('/', (req, res) => {
    res.send("availables methods are get");
})

const jukugoRouter = require('./routes/jukugo');
app.use('/jukugo', jukugoRouter);

const grammarRouter = require('./routes/grammar');
app.use('/grammar', grammarRouter)


app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})
