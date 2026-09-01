import express from "express"
import { configDotenv } from "dotenv"
configDotenv()

const app = express()

// Configuración
app.set('view engine', 'ejs');
app.set('views', './src/views');

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

//ruta principal
app.get('/', (req, res) => {
    res.render('index');
});

app.listen(process.env.PORT, () => {
    console.log("Aplicación escuchando en puerto 8600: \n http://localhost:8600")
})