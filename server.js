import 'dotenv/config';
import express from 'express';
import './connection';
const app = express();
import routes from './routes';
const PORT = process.env.PORT || 8080;
import bodyParser from 'body-parser';

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.text());

app.use(routes);

app.listen(PORT, () => {
   console.log(`API Server now listening on PORT ${PORT}`);
});