import { AppDataSource } from "@shared/typeorm/data-source";
import Manga from "../entities/Manga";
import { MangaRepository } from "../repositories/MangaRepository";



class ListMangaService {
  public async execute(): Promise<Manga[]>{
    const manga = await MangaRepository.find();

    return manga;
  }
}

export default ListMangaService;
