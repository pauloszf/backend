import AppError from "@shared/errors/AppError";
import { AppDataSource } from "@shared/typeorm/data-source";
import { MangaRepository } from "../repositories/MangaRepository";

interface IRequest {
  id: string;
}

class DeleteMangaService {
  public async execute({ id }: IRequest) {
    await AppDataSource.transaction (async (manager) : Promise<void> => {
      const mangasRepository = manager.withRepository(MangaRepository);

      const manga = await mangasRepository.findByName(id);

      if(!manga) {
        throw new AppError('Manga não encontrado');
      }

      await mangasRepository.remove(manga);
    })

  }
}

export default DeleteMangaService;
