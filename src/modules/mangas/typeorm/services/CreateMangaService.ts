import AppError from "@shared/errors/AppError";
import { AppDataSource } from "@shared/typeorm/data-source";
import Manga from "../entities/Manga";
import { MangaRepository } from "../repositories/MangaRepository";

interface IRequest {
  mangaName: string;
  cap: number;
}

class CreateMangaService {
  public async execute({mangaName, cap}: IRequest) {
    await AppDataSource.transaction (async (manager) : Promise<Manga | undefined> => {
      const mangasRepository = manager.withRepository(MangaRepository);
      const mangaExists = await mangasRepository.findByName(mangaName);

      if(mangaExists) {
        throw new AppError('There is alredy one manga with this name');
      }
      const manga = manager.create(Manga,{
        mangaName,
        cap
      });

      await manager.save(manga);

      console.log(manga);
      return manga;
    })

  }
}

export default CreateMangaService;
