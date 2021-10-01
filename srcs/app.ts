import express from 'express';
import dotenv from 'dotenv';
import router from './routes';
import cookieParser from 'cookie-parser';
import sequelize from './models';

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

sequelize
    .sync({ force: false })
    .then(async () => {
        console.log('Database connection success');
    })
    .catch((error) => console.log(error.message));

app.use(router);

const runServer = async () => {
    /* Run server */
    console.log('Set application...');
    app.listen(process.env.PORT, async () => {
        console.log(`server Run with port: ${process.env.PORT}`);
        // await sequelize
        //     .authenticate()
        //     .then(async () => {
        //         console.log('DB connection success');
        //     })
        //     .catch((error) => {
        //     });
    });
};

runServer();
