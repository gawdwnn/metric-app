import { DataSource } from "typeorm";
import { join } from 'path';

import dotenv from "dotenv";

dotenv.config();

const dataSource = new DataSource({
  type: "postgres",
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  logging: false,
  synchronize: true,
  entities: [join(__dirname, '../**', '*.entity.{ts,js}')],
});

export default dataSource;
