import { Countries } from "../entities/countries";
import { Continents } from "../entities/continents";
import { DataSource } from "typeorm";

export const dataSource = new DataSource({
  type: "sqlite",
  database: "db.sqlite",
  synchronize: true,
  logging: ["error", "query"],
  entities: [Countries, Continents],
});