import "reflect-metadata";
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Address, Price, Articles, Review } from "./";

@Entity("doctor")
export class Doctor {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  professional_license!: number;

  @Column({ type: "text", nullable: true })
  experience!: string;

  @Column({ type: "text", nullable: true })
  facebook!: string;

  @Column({ type: "text", nullable: true })
  instagram!: string;

  @Column({ type: "text", nullable: true })
  twitter!: string;

  @Column({ type: "text", nullable: true })
  linkedin!: string;

  @Column({ type: "text", nullable: true })
  profession!: string;

  @Column({ type: "text", nullable: true })
  image!: string;

  @OneToMany(() => Address, (address) => address.doctor)
  addresses!: Address[];
}

@Entity("doctor")
export class DoctorFull extends Doctor {
  @OneToMany(() => Price, (price) => price.doctor)
  prices!: Price[];

  @OneToMany(() => Articles, (articles) => articles.doctor)
  articles!: Articles[];

  @OneToMany(() => Review, (review) => review.doctor)
  reviews!: Review[];
}
