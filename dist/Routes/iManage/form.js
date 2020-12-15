"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formRouter = void 0;
const tslib_1 = require("tslib");
const express = tslib_1.__importStar(require("express"));
const fs_1 = tslib_1.__importDefault(require("fs"));
const file_1 = tslib_1.__importDefault(require("../../Utils/file"));
exports.formRouter = express.Router();
const ajv_1 = tslib_1.__importDefault(require("ajv"));
const schema_1 = tslib_1.__importDefault(require("../../Utils/schema"));
exports.formRouter.post('/', (req, res) => {
    let data = req.body.data;
    let ajv = new ajv_1.default();
    let validator = ajv.compile(schema_1.default.majorCategorySchema(data.value));
    if (validator(data)) {
        file_1.default.writeFile('data.json', data).then(result => {
            res.status(200).send('Write success');
        });
    }
    else {
        res.status(400).send(JSON.stringify(validator.errors));
    }
});
exports.formRouter.get('/', (req, res) => {
    let rawdata = fs_1.default.readFileSync('data.json');
    let storedData = JSON.parse(rawdata);
    res.status(200).send(storedData);
});
exports.formRouter.put('/', (req, res) => {
    let formData = req.body.formData;
    let ajv = new ajv_1.default();
    let validator = ajv.compile(schema_1.default.majorCategorySchema(formData.value));
    if (validator(formData)) {
        let rawdata = fs_1.default.readFileSync('data.json');
        let storedData = JSON.parse(rawdata);
        storedData.value = formData.value;
        storedData.quantity = formData.quantity;
        storedData.food = formData.food;
        file_1.default.writeFile('data.json', storedData).then(result => {
            res.status(200).send(storedData);
        }).catch(error => {
            res.status(500).send('Failed to write');
        });
    }
    else {
        res.status(400).send(JSON.stringify(validator.errors));
    }
});
exports.formRouter.delete('/', (req, res) => {
    file_1.default.writeFile('data.json', {}).then(result => {
        res.status(200).send('Deleted');
    }).catch(error => {
        res.status(500).send('Failed to delete');
    });
});
//# sourceMappingURL=form.js.map