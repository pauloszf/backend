import { MangaRepository } from "@modules/mangas/typeorm/repositories/MangaRepository";
import UsersRepository from "@modules/users/typeorm/repositories/UsersRepository";
import AppError from "@shared/errors/AppError";
import MangaList from "../typeorm/entities/MangaList";
import { MangaListRepository } from "../typeorm/repositories/MangaListRepository";

interface IManga {
  id: string;
  cap: number;
}

interface IRequest {
  user_id: string;
  mangas: IManga[];
}

class CreateMangaListService {
  public async execute({ user_id, mangas }: IRequest): Promise<MangaList> {
    const userExists = await UsersRepository.findById(user_id);
    if (!userExists) {
      throw new AppError('User not found with this id');
    }

    const mangaExists = await MangaRepository.findAllById(mangas);

    if (!mangaExists.length) {
      throw new AppError('No mangá found.');
    }

    const idsMangaExists = mangaExists.map((manga) => manga.id);

    const serializedMangas = mangas.map(manga => ({
      manga_id: manga.id,
      cap: manga.cap,
    }))
    const mangaList = await MangaListRepository.createMangaList({
      user: userExists,
      mangas: serializedMangas
    })
    await MangaListRepository.save(mangaList);

    return (mangaList);
  }
}

export default CreateMangaListService;
