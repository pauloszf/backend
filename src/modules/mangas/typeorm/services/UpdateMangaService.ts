import AppError from "@shared/errors/AppError";
import { AppDataSource } from "@shared/typeorm/data-source";
import Manga from "../entities/Manga";
import { MangaRepository } from "../repositories/MangaRepository";

interface IRequest {
  id: string;
  mangaName: string;
  cap: number;
}

class UpdateMangaService {
  public async execute({id, mangaName, cap}: IRequest): Promise<Manga>{
    const manga = await AppDataSource
    .createQueryBuilder(Manga, 'manga')
    .where("manga.id = :id", {id})
    .getOne();

    if(!manga) {
      throw new AppError('Manga não encontrado');
    }

    const mangaExists = await MangaRepository.findByName(mangaName);

    if(mangaExists && mangaName !== manga.mangaName) {
        throw new AppError('There is alredy one manga with this name');
    }

    manga.mangaName = mangaName;
    manga.cap = cap;

    await MangaRepository.save(manga);

    return(manga);
  }
}

export default UpdateMangaService;
