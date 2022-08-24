import { Request, Response } from "express";
import CreateMangaService from "../typeorm/services/CreateMangaService";
import DeleteMangaService from "../typeorm/services/DeleteMangaService";
import ListMangaService from "../typeorm/services/ListMangaService";
import ShowMangaService from "../typeorm/services/ShowMangaService";
import UpdateMangaService from "../typeorm/services/UpdateMangaService";

 export default class MangasController {
  public async index(request: Request, response: Response): Promise<Response>{
    const listMangas = new ListMangaService();

    const mangas = await listMangas.execute();
    return response.json(mangas);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const showProduct = new ShowMangaService();

    const manga = await showProduct.execute( {id} );

    return response.json(manga);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { mangaName, cap } = request.body;

    const createManga = new CreateMangaService();

    const manga = await createManga.execute({
      mangaName,
      cap,
    });

    return response.json(manga);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { mangaName, cap } = request.body;
    const { id } = request.params;

    const updateManga = new UpdateMangaService();

    const manga = await updateManga.execute({
      id,
      mangaName,
      cap,
    });

    return response.json(manga);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteManga = new DeleteMangaService();

    await deleteManga.execute({ id });

    return response.json([])
  }
 }
