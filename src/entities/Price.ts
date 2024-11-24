import "reflect-metadata";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { Doctor } from "./";

@Entity("price")
export class Price {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => Doctor, (doctor) => doctor?.addresses)
  @JoinColumn({ name: "doctor_id" })
  doctor!: Promise<Doctor>;

  @Column({ type: "text", nullable: true })
  name!: string;

  @Column({ type: "text", nullable: true })
  price!: number;
}
