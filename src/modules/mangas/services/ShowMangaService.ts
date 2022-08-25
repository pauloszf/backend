import AppError from "@shared/errors/AppError";
import { AppDataSource } from "@shared/typeorm/data-source";
import Manga from "../typeorm/entities/Manga";
import { MangaRepository } from "../typeorm/repositories/MangaRepository";

interface IRequest {
  id: string;
}

class ShowMangaService {
  public async execute({id}: IRequest) : Promise<Manga | undefined>{
    const manga = await AppDataSource
      .createQueryBuilder(Manga, 'manga')
      .where("manga.id = :id", {id})
      .getOne();

    if(!manga) {
      throw new AppError('Manga não encontrado');
    }

    return manga;

  }
}

export default ShowMangaService;
