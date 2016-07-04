import { User } from './user'

export class Ranking {
  id: string;
  name: string;
  picture : string;
  description: string;
  created_at : string;
  members : User[];
}