"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const fs_1 = tslib_1.__importDefault(require("fs"));
class DataStore {
    static writeFile(file, data) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            let a = yield fs_1.default.writeFile("data.json", JSON.stringify(data), err => {
                if (err)
                    throw err;
                console.log("Done writing");
            });
            return a;
        });
    }
}
exports.default = DataStore;
//# sourceMappingURL=file.js.map