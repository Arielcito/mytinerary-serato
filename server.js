const express = require("express")

const app = express()

app.use(cors())
app.get("/prueba/datos",(req,res) => {
    console.log("me llego un get")
    res.json({respuesta:"hola que hace"})
})

app.listen(4000, () => {
    console.log("server is listening on port 4000")
})