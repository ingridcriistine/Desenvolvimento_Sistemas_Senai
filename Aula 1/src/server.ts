import express from 'express';
import initRoutes from './routes/routes.js'
// import connectDB from './database/mongo.js';

const app = express();
const port = 8080;

initRoutes(app)

app.listen(port, () => console.log(`Acesse: http://localhost:${port}/`));

app.get('/getTeste', (req, res) => {
    res.send('GET: Requisição recebida com sucesso!');
});


