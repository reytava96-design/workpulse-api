const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("WorkPulse API rodando 🚀");
});

app.get("/products", (req, res) => {
    res.json([]);
});

const port = process.env.PORT || 3000;
app.listen(port, "0.0.0.0", () => {
    console.log("API rodando na porta " + port);
});
