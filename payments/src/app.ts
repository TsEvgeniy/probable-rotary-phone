import express, { Request, Response } from 'express';
import morgan from 'morgan';
import 'express-async-errors';
import { json } from 'body-parser';
import cookieSession from "cookie-session";
import { errorHandler, NotFoundError, currentUser } from '@g_zone/common';
import { createChargeRouter } from "./routes/new";

const app = express();

app.set('trust proxy', true);

app.use(json());
app.use(morgan('dev'));
app.use(cookieSession({
  signed: false,
  secure: process.env.NODE_ENV !== 'test'
}));

app.use(currentUser);

app.use(createChargeRouter);

app.get('*', async (req: Request, res: Response) => {
  throw new NotFoundError();
});

app.use(errorHandler);

export { app };