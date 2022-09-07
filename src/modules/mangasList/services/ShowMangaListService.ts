import AppError from "@shared/errors/AppError";
import MangaList from "../typeorm/entities/MangaList";
import { MangaListRepository } from "../typeorm/repositories/MangaListRepository";


interface IRequest {
  id: string;
}

class ShowMangaListService {
  public async execute({ id }: IRequest): Promise<MangaList> {
    const mangaList = await MangaListRepository.findById(id);

    if (!mangaList) {
      throw new AppError('List not found with this id');
    }

    return mangaList;
  }
}

export default ShowMangaListService;
