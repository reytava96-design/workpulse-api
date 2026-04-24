const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("WorkPulse API rodando 🚀");
});

app.get("/products", (req, res) => {
    res.json([{ id: 1, name: "Produto teste" }]);
});

// 🔴 ESSA LINHA É CRÍTICA NO AZURE
app.listen(process.env.PORT, "0.0.0.0", () => {
    console.log("API rodando na porta " + process.env.PORT);
});
