const express = require('express');
const path = require('path');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000;

const app = express();

// Enable body parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Set static folder
// app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/openai', require('./routes/openaiRoutes'))
app.get('/api/openai',(req, res) => {
    res.send({ success: true})
})

app.listen(port, () => console.log(`Server started on port ${port}`));

module.exports = app;