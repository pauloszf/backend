import AppError from "@shared/errors/AppError";
import { AppDataSource } from "@shared/typeorm/data-source";
import Manga from "../entities/Manga";
import { MangaRepository } from "../repositories/MangaRepository";

interface IRequest {
  id: string;
}

class ShowMangaService {
  public async execute({id}: IRequest) {
    await AppDataSource.transaction (async (manager) : Promise<Manga | undefined > => {
      const mangasRepository = manager.withRepository(MangaRepository);

      const manga = await mangasRepository.findByName(id);

      if(!manga) {
        throw new AppError('Manga não encontrado');
      }

      return manga;
    })

  }
}

export default ShowMangaService;
