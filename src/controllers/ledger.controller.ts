import * as db from '../services/database';
import { v4 as uuidv4 } from 'uuid';
import { Request, Response } from 'express';
import { Ledger } from '../models/ledger.entity';

export const createLedger = (req: Request, res: Response) => {
  const id = uuidv4();
  const { personId, choreId } = req.body;
  const completedOn = new Date().toString();
  console.log('recieved ', req.body);
  const result = db.run(
    'insert into ledger (id, person_id, chore_id, completed_on) values(@id, @personId, @choreId, @completedOn)',
    { id, personId, choreId, completedOn },
  );
  if (result.changes) {
    res.json({ message: 'ledger success', result: result });
  }
  return res.json({ message: 'ledger failed!' });
};

export const findAllLedgers = (req: Request, res: Response) => {
  const result = db.queryAll(
    'SELECT id, person_id as personId, chore_id as choreId, completed_on as completedOn FROM ledger',
    {},
  );
  return res.json(result);
};

export const findOneLedger = (req: Request, res: Response) => {
  const result = db.queryOne(
    'SELECT id, person_id as personId, chore_id as choreId, completed_on as completedOn FROM ledger WHERE id=?',
    req.params.id,
  );
  return res.json(result);
};

export const updateOneLedger = (req: Request, res: Response) => {
  const { personId, choreId } = req.body;
  const result = db.run(
    'UPDATE ledger SET person_id=?, chore_id=? WHERE id=?',
    [personId, choreId, req.params.id],
  );
  return res.json({ message: 'success', result: result });
};
export const deleteOneLedger = (req: Request, res: Response) => {
  const result = db.run('DELETE FROM ledger WHERE id=?', req.params.id);
  return res.json({ message: 'success!', result: result });
};
