import express, { type Application, json, urlencoded, NextFunction, Response, Request } from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import compression from 'compression';

const applicationModule = (ORIGINS: string[] = []): Application => {
  const app = express();

  /**
   * CORS
   * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
   */
  app.use(
    cors({
      origin: ORIGINS,
      credentials: true,
    })
  );

  app.use(compression());
  app.use(json());
  app.use(cookieParser());

  app.use(urlencoded({ extended: true }));

  // Testing route
  app.get('/test', (req: Request, res: Response, next: NextFunction) => {
    res.status(200).json({
      success: true,
      message: 'API is working',
    });
  });

  return app;
};

export default applicationModule;
