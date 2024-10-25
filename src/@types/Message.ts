import { Queue } from 'src/constants/Queue';

export type Message = {
  queue: Queue;
  name: string;
};
