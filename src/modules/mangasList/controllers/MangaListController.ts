import { Request, Response } from "express";
import CreateMangaListService from "../services/CreateMangaListService";
import ShowMangaListService from "../services/ShowMangaListService";

 export default class MangaListController {

  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const showMangaList = new ShowMangaListService();

    const mangaList = await showMangaList.execute( {id} );

    return response.json(mangaList);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { user_id, mangas } = request.body;

    const createMangaList = new CreateMangaListService();

    const mangaList = await createMangaList.execute({
      user_id,
      mangas,
    });

    return response.json(mangaList);
  }
 }
