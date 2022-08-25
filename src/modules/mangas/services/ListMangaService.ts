import { AppDataSource } from "@shared/typeorm/data-source";
import Manga from "../typeorm/entities/Manga";
import { MangaRepository } from "../typeorm/repositories/MangaRepository";



class ListMangaService {
  public async execute(): Promise<Manga[]>{
    const manga = await MangaRepository.find();

    return manga;
  }
}

export default ListMangaService;
