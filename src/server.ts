import express, { response } from "express";


const app = express();

app.get("/", (require, response) => {
    return response.json({ menssage: "nlw 05" });
})
app.post("/users", (require, response) => {
    return response.json({ menssage: "usuario salvo" })
})

app.listen(3333, () => console.log("server is running"));