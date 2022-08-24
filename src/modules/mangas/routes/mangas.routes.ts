import { Router } from 'express';
import MangasController from '../controllers/MangasController';
import { celebrate, Joi, Segments } from 'celebrate';

const mangasRouter = Router();
const mangasController = new MangasController();

mangasRouter.get('/', mangasController.index);

mangasRouter.get(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  mangasController.show
);

mangasRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      mangaName: Joi.string().required(),
      cap: Joi.number().precision(1).required(),
    },
  }),
  mangasController.create
);

mangasRouter.put(
  '/:id',
  celebrate({
    [Segments.BODY]: {
      mangaName: Joi.string().required(),
      cap: Joi.number().precision(1).required(),
    },
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  mangasController.update
);

mangasRouter.delete(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  mangasController.delete
);

export default mangasRouter;
