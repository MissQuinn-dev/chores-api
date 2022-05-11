import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';

import {
  createOnePerson,
  findAllPeople,
  findOnePerson,
  updateOnePerson,
  deleteOnePerson,
} from './controllers/people.controller';

import {
  createChore,
  findAllChores,
  findOneChore,
  updateOneChore,
  deleteOneChore,
} from './controllers/chores.controller';

import {
  createLedger,
  findAllLedgers,
  findOneLedger,
  updateOneLedger,
  deleteOneLedger,
} from './controllers/ledger.controller';
const app = express();
const port = 3000;
app.use(bodyParser.json());

app.get('/health', (raq: Request, res: Response) => {
  res.json({ message: 'healthy' });
});

app.post('/people', createOnePerson);
app.get('/people', findAllPeople);
app.get('/people/:id', findOnePerson);
app.patch('/people/:id', updateOnePerson);
app.delete('/people/:id', deleteOnePerson);

app.post('/chores', createChore);
app.get('/chores', findAllChores);
app.get('/chores/:id', findOneChore);
app.patch('/chores/:id', updateOneChore);
app.delete('/chores/:id', deleteOneChore);

app.post('/ledger', createLedger);
app.get('/ledger', findAllLedgers);
app.get('/ledger/:id', findOneLedger);
app.patch('/ledger/:id', updateOneLedger);
app.delete('/ledger/:id', deleteOneLedger);

app.listen(port, () => console.log(`server is listening on port ${port}`));
