import express, { Request, Response } from 'express';
import globalErrorHandler from './app/middleware/globalErrorHandler';
import notFound from './app/middleware/notFound';
import routes from './app/routes';
import cors from 'cors';
export const app = express();

app.use(express.json());
app.use(cors());

// Routes
app.use('/api/v1', routes);

const test = (req: Request, res: Response) => {
  res.send('This is a test route');
};
app.get('/', test);
app.use(globalErrorHandler);

app.use(notFound);
