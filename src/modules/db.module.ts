import { Mongoose, connect } from 'mongoose';

const databaseService = async (mongoURI: string) => {
  console.info('<<<<< Connecting to database...');

  try {
    await connect(mongoURI, {
      autoIndex: true,
    }).then((data: Mongoose) => {
      console.info(`...database connected with ${data.connection.host} >>>>>`);
    });
  } catch (error: unknown | any) {
    console.error(`Oops! Error connecting to database: ${error} \n >>>>>`);

    // Retry again after 5 seconds
    setTimeout(databaseService, 5000);
  }
};

export default databaseService;
