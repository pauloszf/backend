import { Router } from 'express';
import mangasRouter from '@modules/mangas/routes/mangas.routes';

const routes = Router();

routes.use('/mangas', mangasRouter);



export default routes;
