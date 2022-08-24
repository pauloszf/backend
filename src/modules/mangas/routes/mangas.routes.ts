import { Router } from 'express';
import MangasController from '../controllers/MangasController';
import ListMangaService from '../typeorm/services/ListMangaService';

const mangasRouter = Router();
const mangasController = new MangasController();

mangasRouter.get('/', mangasController.index);
mangasRouter.get('/:id', mangasController.show);
mangasRouter.post('/', mangasController.create);
mangasRouter.put('/:id', mangasController.update);
mangasRouter.delete('/:id', mangasController.delete);

export default mangasRouter;
