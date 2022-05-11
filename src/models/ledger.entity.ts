import { Chore } from './chore.entity';
import { Person } from './person.entity';
export interface Ledger {
  id: string;
  personId: string;
  choreId: string;
  compleatedOn: string;
}
