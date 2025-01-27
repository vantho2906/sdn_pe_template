import express, { Request, Response, NextFunction } from 'express';
import { authRouter } from './auth.route';
import { errorRouter } from './error.route';
import authentication from '../middlewares/authentication';

const router = express.Router();

router.use('/', authRouter);
router.use('/', errorRouter);
router.get('/', authentication, (req: Request, res: Response, next: NextFunction) => {
  res.render('./dashboard');
});
router.use((req: Request, res: Response, next: NextFunction) => {
  return res.render('./error/404');
});

export default router;
