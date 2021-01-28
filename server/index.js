const express = require("express");
const cors = require('cors');
const characters = require("./engine/characters/index.js");

const app = express();
const port = 8888;
app.use(cors());
app.use(express.static('assets/characters'))

app.get("/", (req, res) => {
    res.send("Server running");
});

app.get("/char/:id", (req, res) => {
    // Get character
    let char = characters.filter(x => x.id === req.params.id);
    if (char){        
        res.send(char);
    }
});

app.listen(port, () => {
    console.log(`App running on ${port}`);
});
