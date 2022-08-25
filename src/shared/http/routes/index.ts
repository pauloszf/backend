import { Router } from 'express';
import mangasRouter from '@modules/mangas/routes/mangas.routes';
import usersRouter from '@modules/users/routes/users.routes';

const routes = Router();

routes.use('/mangas', mangasRouter);
routes.use('/users', usersRouter);



export default routes;
