import { DataSource } from "typeorm";
import {
  Doctor,
  User,
  Address,
  Review,
  Price,
  Articles,
  DoctorFull,
} from "@/entities"; // Assuming you will create an entity called User

let dataSource: DataSource;

export const getDataSource = async (): Promise<DataSource> => {
  if (!dataSource) {
    dataSource = new DataSource({
      type: "sqlite",
      database: "./database.db",
      synchronize: true,
      entities: [Doctor, User, Address, Review, Price, Articles, DoctorFull],
    });

    await dataSource.initialize().catch((error) => {
      console.error("Error initializing database", error);
    });
  }
  return dataSource;
};
