import express from "express"
import { configDotenv } from "dotenv"
configDotenv()

const app = express()

app.listen(process.env.PORT, () => {
    console.log("Aplicación escuchando en puerto 8600")
})