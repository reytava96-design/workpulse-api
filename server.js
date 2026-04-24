const express = require("express");
const app = express();

app.use(express.json());

let products = [];

app.get("/", (req, res) => {
    res.send("WorkPulse API rodando 🚀");
});

app.get("/products", (req, res) => {
    res.json(products);
});

app.post("/products", (req, res) => {
    products.push(req.body);
    res.json({ message: "Produto adicionado", data: req.body });
});

const port = process.env.PORT || 3000;
app.listen(port, "0.0.0.0", () => {
    console.log("API rodando na porta " + port);
});
