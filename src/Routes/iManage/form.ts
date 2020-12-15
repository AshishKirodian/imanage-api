import * as express from 'express';
import fs from 'fs';
import DataStore from '../../Utils/file';
export const formRouter = express.Router();
import Ajv from "ajv";
import SchemaUtils from '../../Utils/schema';

formRouter.post('/', (req, res) => {
    let data = req.body.data;
    let ajv = new Ajv();
    let validator = ajv.compile(SchemaUtils.majorCategorySchema(data.value));
    if (validator(data)) {
        DataStore.writeFile('data.json', data).then(
            result => {
                res.status(200).send('Write success');
            }
        )
    } else {
        res.status(400).send(JSON.stringify(validator.errors));
    }
})

formRouter.get('/', (req, res) => {
    let rawdata = fs.readFileSync('data.json') as any;
    let storedData = JSON.parse(rawdata);
    res.status(200).send(storedData)
})

formRouter.put('/', (req, res) => {
    let formData = req.body.formData;
    let ajv = new Ajv();
    let validator = ajv.compile(SchemaUtils.majorCategorySchema(formData.value));
    if (validator(formData)) {
        let rawdata = fs.readFileSync('data.json') as any;
        let storedData = JSON.parse(rawdata);
        storedData.value = formData.value;
        storedData.quantity = formData.quantity;
        storedData.food = formData.food;
        DataStore.writeFile('data.json', storedData).then(
            result => {
                res.status(200).send(storedData)
            }
        ).catch(
            error => {
                res.status(500).send('Failed to write')
            }
        )
    } else {
        res.status(400).send(JSON.stringify(validator.errors));
    }

})

formRouter.delete('/', (req, res) => {
    DataStore.writeFile('data.json', {}).then(
        result => {
            res.status(200).send('Deleted')
        }
    ).catch(
        error => {
            res.status(500).send('Failed to delete')
        }
    )
})