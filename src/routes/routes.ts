import { Router } from 'express';
import { dataController } from '../controllers/dataController';
import { detailController } from '../controllers/detailController';

const routes = Router();

routes.get('/data', dataController);
routes.get('/detail', detailController);

export default routes;