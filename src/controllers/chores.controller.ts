import * as db from '../services/database';
import { v4 as uuidv4 } from 'uuid';
import { Request, Response } from 'express';
import { Chore } from '../models/chore.entity';

export const createChore = (req: Request, res: Response) => {
  const id = uuidv4();
  const { choreName, description, interval } = req.body;
  console.log('recieved ', req.body);
  const result = db.run(
    'insert into chores (id, name, description, interval) values (@id, @choreName, @description, @interval)',
    { id, choreName, description, interval },
  );
  if (result.changes) {
    res.json({ message: 'success', result: result });
  }
  return res.json({ message: 'chore failed!' });
};

export const findAllChores = (req: Request, res: Response) => {
  const result = db.queryAll(
    'SELECT id, name as choreName, description, interval FROM chores',
    {},
  );
  return res.json(result);
};

export const findOneChore = (req: Request, res: Response) => {
  const result = db.queryOne(
    'SELECT id, name as choreName, description, interval FROM chores WHERE id=?',
    req.params.id,
  );
  return res.json(result);
};

export const updateOneChore = (req: Request, res: Response) => {
  const { choreName, description, interval } = req.body;
  const result = db.run(
    'UPDATE chores SET name=?, description=?, interval=? WHERE id=?',
    [choreName, description, interval, req.params.id],
  );
  return res.json({ message: 'success!', result: result });
};

export const deleteOneChore = (req: Request, res: Response) => {
  const result = db.run('DELETE FROM chores WHERE id=?', req.params.id);
  return res.json({ message: 'success!', result: result });
};
