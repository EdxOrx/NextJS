import "reflect-metadata";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { Doctor } from "./";

@Entity("articles")
export class Articles {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => Doctor, (doctor) => doctor?.addresses)
  @JoinColumn({ name: "doctor_id" })
  doctor!: Promise<Doctor>;

  @Column({ type: "text", nullable: true })
  content!: string;

  @Column({ type: "text", nullable: true })
  date!: string;
}
