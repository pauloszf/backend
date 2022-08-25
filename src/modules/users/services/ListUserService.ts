import User from "../typeorm/entities/User";
import UsersRepository from "../typeorm/repositories/UsersRepository";



class ListUserService {
  public async execute(): Promise<User[]>{
    const user = await UsersRepository.find();

    return user;
  }
}

export default ListUserService;
