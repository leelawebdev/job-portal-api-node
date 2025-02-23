import express, { Application, NextFunction, Request, Response } from 'express';
import 'dotenv/config';
import appRoutes from './shared/routes/appRoutes';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';
import { CustomError } from './shared/cores/error.core';

export default class Server {
  private app: Application;
  constructor() {
    this.app = express();
  }

  public start() {
    this.setupMiddlewares();
    this.setupRoutes();
    this.setupGlobalErrors();
    this.listenServer();
  }

  private setupMiddlewares() {
    this.app.use(express.json());
  }

  private setupRoutes() {
    appRoutes(this.app);
  }

  private setupGlobalErrors() {
    this.app.all('*', (req: Request, res: Response) => {
      res.status(StatusCodes.NOT_FOUND).json({
        error: ReasonPhrases.NOT_FOUND
      });
    });

    this.app.use((error: any, req: Request, res: Response, next: NextFunction) => {
      if (error instanceof CustomError) {
        res.status(error.statusCode).json({
          error: error.message
        });
      }
    });
  }

  private listenServer() {
    const port = process.env.PORT || 5050;
    this.app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  }
}
