import * as db from '../services/database';
import { v4 as uuidv4 } from 'uuid';
import { Request, Response } from 'express';
import { Person } from '../models/person.entity';

export const createOnePerson = (req: Request, res: Response) => {
  const id = uuidv4();
  const { firstName, lastName } = req.body;
  console.log('recieved ', req.body);
  const result = db.run(
    'insert into people (id, first_name, last_name) values (@id, @firstName, @lastName)',
    { id, firstName, lastName },
  );
  if (result.changes) {
    res.json({ message: 'success', result: result });
  }
  return res.json({ message: 'people failed!' });
};

export const findAllPeople = (req: Request, res: Response) => {
  const result = db.queryAll(
    'SELECT id, first_name as firstName, last_name as lastName FROM people',
    {},
  );
  return res.json(result);
};

export const findOnePerson = (req: Request, res: Response) => {
  const result = db.queryOne(
    'SELECT id, first_name as firstName, last_name as lastName FROM people WHERE id=?',
    req.params.id,
  );
  return res.json(result);
};

export const updateOnePerson = (req: Request, res: Response) => {
  const { firstName, lastName } = req.body;
  const result = db.run(
    'UPDATE people SET first_name=?, last_name=? WHERE id=?',
    [firstName, lastName, req.params.id],
  );
  return res.json({ message: 'success!', result: result });
};

export const deleteOnePerson = (req: Request, res: Response) => {
  const result = db.run('DELETE FROM people WHERE id=?', req.params.id);
  return res.json({ message: 'success!', result: result });
};
