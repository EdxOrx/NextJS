import "reflect-metadata";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { Doctor } from "./";

@Entity("address")
export class Address {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => Doctor, (doctor) => doctor?.addresses)
  @JoinColumn({ name: "doctor_id" })
  doctor!: Promise<Doctor>;

  @Column({ type: "text", nullable: true })
  address!: number;

  @Column({ type: "text", nullable: true })
  phone_number!: string;

  @Column({ type: "text", nullable: true })
  schedule!: string;
}
