import * as express from 'express';
import { app } from '../..';
export var sampleRouter = express.Router();

sampleRouter.get('/', (req, res) => {
    res.status(200).send('Hello World!! Welcome to Asgard. Clone the app to make modifications and run');
});