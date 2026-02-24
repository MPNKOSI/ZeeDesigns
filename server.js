import express from "express";
import path from "path";
import bodyParser from "body-parser";

const app = express();

let initialPath = path.join("public");

app.use(express.static("public"));
app.use(express.json());
app.use(bodyParser.json({ limit: '20mb' })); // Adjust the limit as needed
app.use(bodyParser.urlencoded({ limit: '20mb', extended: true }));

//404 route
app.get('/error404', (req, res) => {
    res.sendFile(path.resolve(initialPath, "error404.html"));
})

app.use((req, res) => {
    res.redirect('/error404') 
})

app.listen(3000, (req, res) => {
    console.log('running 3000km/h...')
})

