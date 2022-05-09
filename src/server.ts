import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import {
  createOnePerson,
  findAllPeople,
} from './controllers/people.controller';
const app = express();
const port = 3000;
app.use(bodyParser.json());

app.get('/health', (raq: Request, res: Response) => {
  res.json({ message: 'healthy' });
});

app.post('/people', createOnePerson);

app.get('/people', findAllPeople);

app.listen(port, () => console.log(`server is listening on port ${port}`));
