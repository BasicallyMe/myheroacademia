const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 5000;

app.use(cors());


app.get('/api/welcome', (req, res) => {
    res.json({ message: "Welcome to MHA"});
});


app.listen(PORT);