import http from 'http';
import { applicationModule, databaseModule } from './modules';
import { getEnvVariable } from './env';

export const startServer = async () => {
  const MONGO_DB_URI: string = getEnvVariable('MONGO_DB_URI') ?? '';
  const PORT: number = Number(getEnvVariable('PORT') ?? '');
  const app = applicationModule();

  const server = http.createServer(app);

  // DB connection
  await databaseModule(MONGO_DB_URI);

  server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}/`);
  });
};

startServer();
