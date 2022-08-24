import AppError from "@shared/errors/AppError";
import { AppDataSource } from "@shared/typeorm/data-source";
import Manga from "../entities/Manga";
import { MangaRepository } from "../repositories/MangaRepository";

interface IRequest {
  mangaName: string;
  cap: number;
}

class CreateMangaService {
  public async execute({mangaName, cap}: IRequest) : Promise<Manga>{
    const mangaExists = await MangaRepository.findByName(mangaName);

    if(mangaExists) {
        throw new AppError('There is alredy one manga with this name');
    }

    const manga = MangaRepository.create({
      mangaName,
      cap
    });

    await MangaRepository.save(manga);

    return(manga);
  }
}

export default CreateMangaService;
