const express = require("express");
const app = express();
app.use(express.json());

let lastCommand = "";

// When Roblox sends a command:
app.post("/send", (req, res) => {
    lastCommand = req.body.cmd;
    res.json({ ok: true });
});

// When your PC checks for commands:
app.get("/check", (req, res) => {
    res.json({ cmd: lastCommand });
    lastCommand = "";
});

app.listen(3000);
