"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const tslib_1 = require("tslib");
const express_1 = tslib_1.__importDefault(require("express"));
const cors_1 = tslib_1.__importDefault(require("cors"));
const bodyParser = tslib_1.__importStar(require("body-parser"));
const sample_1 = require("./Routes/Sample/sample");
exports.app = express_1.default();
const form_1 = require("./Routes/iManage/form");
exports.app.use(bodyParser.json());
exports.app.use(cors_1.default());
exports.app.use('/', sample_1.sampleRouter);
exports.app.use('/im', form_1.formRouter);
const port = 5000;
exports.app.listen(port, () => {
    console.log('API active at port ' + port + '\nSave the files to run the server after changes');
});
//# sourceMappingURL=index.js.map