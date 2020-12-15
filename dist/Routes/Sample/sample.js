"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sampleRouter = void 0;
const tslib_1 = require("tslib");
const express = tslib_1.__importStar(require("express"));
exports.sampleRouter = express.Router();
exports.sampleRouter.get('/', (req, res) => {
    res.status(200).send('Hello World!! Welcome to Asgard. Clone the app to make modifications and run');
});
//# sourceMappingURL=sample.js.map