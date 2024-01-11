import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, ManyToOne, JoinColumn } from 'typeorm';
import { User } from './User';

@Entity()
export class Task extends BaseEntity {

  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  description: string;

  @Column({ type: 'enum', enum: ['pending', 'finished'], default: 'pending' })
  status: string;

  @Column({ type: 'timestamp', default: null, nullable: true })
  deleted_at: Date;

  @ManyToOne(() => User, user => user.tasks)
  @JoinColumn({ name: 'user_id' })
  user: User;

}
