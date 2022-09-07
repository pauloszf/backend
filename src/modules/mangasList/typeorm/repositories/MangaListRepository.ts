import User from "@modules/users/typeorm/entities/User";
import { AppDataSource } from "@shared/typeorm/data-source";
import MangaList from "../entities/MangaList";
import MangaListMangas from "../entities/MangaListMangas";

interface IManga{
  manga_id: string,
  cap: number
}

interface IRequest {
  user: User;
  mangas: IManga[];
}

export const MangaListRepository = AppDataSource.getRepository(MangaList).extend({
  async findById(id: string){
    return await this.createQueryBuilder("mangaList")
    .leftJoinAndSelect("mangaList.mangaListManga", "MangaListMangas")
    .leftJoinAndSelect("mangaList.user", "User")
    .where("mangaList.id = :id", {id})
    .getOne();
  },

  async createMangaList({user, mangas}: IRequest){
    const mangaList = this.create({
      user,
      mangaListManga: mangas,
    });

    await this.save(mangaList);

    return mangaList;
  },
});
