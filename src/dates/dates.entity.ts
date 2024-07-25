import { CreateDateColumn, DeleteDateColumn } from 'typeorm';

export abstract class Dates {
  @CreateDateColumn()
  crate_at: Date;

  @DeleteDateColumn()
  delete_at: Date;
}
