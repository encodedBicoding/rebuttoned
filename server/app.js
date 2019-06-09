import express from 'express';
import cors from 'cors';
import { config } from 'dotenv';
import bodyParser from 'body-parser';
import debug from 'debug';

import routes from './routes/routes';

config();

const log = debug('dev');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.get('/', (req, res) => res.status(302).redirect('/api/v1'));
app.use('/api/v1', routes);

app.use((req, res)=>{
  res.status(404).json({
    status: 404,
    error: 'Sorry, no such endpoint resides here'
  });
});

app.listen(PORT, () => log(`Rebuttoned runs on PORT ${PORT}`));

export default app;