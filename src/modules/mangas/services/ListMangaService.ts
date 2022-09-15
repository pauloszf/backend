import Manga from "../typeorm/entities/Manga";
import { MangaRepository } from "../typeorm/repositories/MangaRepository";
import RedisCache from "@shared/cache/RedisCache";

class ListMangaService {
  public async execute(): Promise<Manga[]>{
    //const redisCache = new RedisCache();

    let mangas = await RedisCache.recover<Manga[]>(
      'api-MANGA_LIST',
    );

    if (!mangas) {
      mangas = await MangaRepository.find();

      await RedisCache.save('api-MANGA_LIST', mangas);
    }

    return mangas;
  }
}

export default ListMangaService;
