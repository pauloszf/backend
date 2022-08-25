import { AppDataSource } from "@shared/typeorm/data-source";
import { Repository } from "typeorm";
import Manga from "../entities/Manga";

export const MangaRepository = AppDataSource.getRepository(Manga).extend({
  async findByName(mangaName: string){
    return await this.createQueryBuilder("manga")
      .where("manga.mangaName = :mangaName", {mangaName})
      .getOne();
  },
});
