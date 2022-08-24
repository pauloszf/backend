import AppError from "@shared/errors/AppError";
import { AppDataSource } from "@shared/typeorm/data-source";
import Manga from "../entities/Manga";
import { MangaRepository } from "../repositories/MangaRepository";

interface IRequest {
  id: string;
}

class DeleteMangaService {
  public async execute({ id }: IRequest): Promise<void>{
    const manga = await AppDataSource
      .createQueryBuilder(Manga, 'manga')
      .where("manga.id = :id", {id})
      .getOne();

    if(!manga) {
      throw new AppError('Manga not found');
    }

    await MangaRepository.remove(manga);
  }
}

export default DeleteMangaService;
