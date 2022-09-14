import { AppDataSource } from "@shared/typeorm/data-source";
import User from "../entities/User";

export const UsersRepository = AppDataSource.getRepository(User).extend({
  async findByName(name: string){
    return await this.createQueryBuilder("user")
      .where("user.name = :name", {name})
      .getOne();
  },

  async findAll() {
    return await this.createQueryBuilder("user")
      .take(10)
      .getMany();
  },

  async findById(id: string){
    return await this.createQueryBuilder("user")
      .where("user.id = :id", {id})
      .getOne();
  },

  async findByEmail(email: string){
    return await this.createQueryBuilder("user")
      .where("user.email = :email", {email})
      .getOne();
  },
});





export default UsersRepository
