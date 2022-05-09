import * as db from '../services/database';
import { v4 as uuidv4 } from 'uuid';
import { Request, Response } from 'express';
import { Person } from '../models/person.entity';

export const createOnePerson = (req: Request, res: Response) => {
  const id = uuidv4();
  const { firstName, lastName } = req.body;
  console.log('recieved ', req.body);
  const result = db.run(
    'insert into people(id, first_name, last_name) values (@id, @firstName, @lastName)',
    { id, firstName, lastName },
  );
  if (result.changes) {
    res.json({ message: 'success', result: result });
  }
  return res.json({ message: 'oh no :(' });
};

export const findAllPeople = (req: Request, res: Response) => {
  const result = db.queryAll(
    'select id, first_name as firstName, last_name as lastName from people',
    {},
  );
  return res.json(result);
};
