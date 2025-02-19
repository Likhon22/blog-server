import express, { Request, Response } from 'express';

export const app = express();

const router = express.Router();

const test = (req: Request, res: Response) => {
  res.send('This is a test route');
};

router.get('/', test);
