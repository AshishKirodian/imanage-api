import express from 'express';
import cors from 'cors';
import * as bodyParser from 'body-parser';
import { sampleRouter } from './Routes/Sample/sample';
export const app = express();
import { formRouter } from './Routes/iManage/form';
app.use(bodyParser.json());
app.use((cors as any)()); // to enable cors for requests, comment/disable this while deploying on server
app.use('/', sampleRouter)
app.use('/im', formRouter)

const port = 5000;

app.listen(port, () => {
  console.log('API active at port ' + port + '\nSave the files to run the server after changes');
});
