import { AppDataSource } from "@shared/typeorm/data-source";
import { Repository } from "typeorm";
import Manga from "../entities/Manga";

interface IFindMangas {
  id: string;
}

export const MangaRepository = AppDataSource.getRepository(Manga).extend({
  async findByName(mangaName: string){
    return await this.createQueryBuilder("manga")
      .where("manga.mangaName = :mangaName", {mangaName})
      .getOne();
  },

  async findAllById(mangas: IFindMangas[]){
    const mangaIds = mangas.map(manga => manga.id);

    const existsMangas = await this.createQueryBuilder("manga")
      .where("manga.id IN (:...ids)", {ids: mangaIds})
      .getMany();
    return existsMangas;
  },
});
