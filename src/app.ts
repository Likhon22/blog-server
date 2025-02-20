import express, { Request, Response } from 'express';
import globalErrorHandler from './app/middleware/globalErrorHandler';
import notFound from './app/middleware/notFound';

export const app = express();

const router = express.Router();

const test = (req: Request, res: Response) => {
  res.send('This is a test route');
};
router.get('/', test);
app.use(globalErrorHandler);

app.use(notFound);
