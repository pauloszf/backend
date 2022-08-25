import AppError from "@shared/errors/AppError";
import User from "../typeorm/entities/User";
import UsersRepository from "../typeorm/repositories/UsersRepository";

interface IRequest {
  name: string;
  email: string;
  password: string;
}

class CreateUserService {
  public async execute({name, email, password}: IRequest) : Promise<User>{
    const emailExists = await UsersRepository.findByEmail(email);

    if(emailExists) {
      throw new AppError('Email address alredy used.');
    }

    const user = UsersRepository.create({
      name,
      email,
      password
    });

    await UsersRepository.save(user);

    return(user);
  }
}

export default CreateUserService;
