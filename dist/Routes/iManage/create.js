"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRouter = void 0;
const tslib_1 = require("tslib");
const express = tslib_1.__importStar(require("express"));
const file_1 = tslib_1.__importDefault(require("../../Utils/file"));
exports.createRouter = express.Router();
exports.createRouter.post('/', (req, res) => {
    let data = req.body.data;
    file_1.default.writeFile('data.json', data).then(result => {
        console.log(result);
        res.status(200).send('Write success');
    });
});
//# sourceMappingURL=create.js.map