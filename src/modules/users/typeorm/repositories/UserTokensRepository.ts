import { AppDataSource } from "@shared/typeorm/data-source";
import UserToken from "../entities/UserToken";

export const UserTokensRepository = AppDataSource.getRepository(UserToken).extend({
  async findByToken(token: string){
    return await this.createQueryBuilder("userToken")
      .where("userToken.token = :token", {token})
      .getOne();
  },

  async generate(user_id: string){
    const userToken = await this.create({
      user_id,
    });
    await this.save(userToken);

    return userToken;
  },

});





export default UserTokensRepository;
