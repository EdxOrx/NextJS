import "reflect-metadata";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { Doctor, User } from "./";

@Entity("review")
export class Review {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => Doctor, (doctor) => doctor?.addresses)
  @JoinColumn({ name: "doctor_id" })
  doctor!: Promise<Doctor>;

  @ManyToOne(() => User, (user) => user?.reviews)
  @JoinColumn({ name: "user_id" })
  user!: Promise<User>;

  @Column({ type: "text", nullable: true })
  content!: string;

  @Column({ type: "text", nullable: true })
  date_review!: string;

  @Column({ type: "text", nullable: true })
  date_response!: string;

  @Column({ type: "text", nullable: true })
  response!: string;
}
