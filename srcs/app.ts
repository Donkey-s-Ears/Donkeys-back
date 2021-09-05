import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

import router from './routes';

const runServer = async () => {

    console.log('Set application...');
    const app = express();

    /* Set middleware */
    app.use(router);

    /* Run server */
    app.listen(process.env.PORT, () => console.log(`server Run with port: ${process.env.PORT}`));
};

runServer();
