import sqlite from 'better-sqlite3';
import exp from 'constants';
import path from 'path';

const db = new sqlite(path.resolve('chores.db'), { fileMustExist: true });
export const run = (sql: string, params: any) => {
  return db.prepare(sql).run(params);
};

export const queryOne = (sql: string, id: string) => {
  return db.prepare(sql).get(id);
};

export const queryAll = (sql: string, params: any) => {
  return db.prepare(sql).all(params);
};
