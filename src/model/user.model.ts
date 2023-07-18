import { Table, Model, Column } from "sequelize-typescript"

@Table
export class User extends Model {
  @Column({ autoIncrement: true, primaryKey: true })
  id: number

  @Column
  password: string

  @Column
  username: string

  @Column
  fullname: string

  @Column
  createdAt?: Date;

  @Column
  updatedAt?: Date;
}