import { AppDataSource } from "@shared/typeorm/data-source";
import Manga from "../entities/Manga";
import { MangaRepository } from "../repositories/MangaRepository";



class ListMangaService {
  public async execute() {
    await AppDataSource.transaction (async (manager) : Promise<Manga[]> => {
      const mangasRepository = manager.withRepository(MangaRepository);

      const mangas = await mangasRepository.find();

      return mangas;
    })

  }
}

export default ListMangaService;
