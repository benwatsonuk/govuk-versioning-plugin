"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = run;
const clone_file_1 = __importDefault(require("./operations/clone-file"));
const modify_file_1 = __importDefault(require("./operations/modify-file"));
const create_variables_1 = __importDefault(require("./utils/create-variables"));
async function run(versionToCreate) {
    // for (const dir of config.cloneDirectories || []) {
    //   await cloneDirectory(dir);
    // }
    for (const item of versionToCreate.itemsToClone || []) {
        if (item.type === "file") {
            await (0, clone_file_1.default)({ path: item.path, versionToCreate });
        }
        else if (item.type === "directory") {
            // await cloneDirectory(item);
        }
    }
    const variables = (0, create_variables_1.default)(versionToCreate);
    console.log(variables);
    for (const file of versionToCreate.itemsToUpdate || []) {
        await (0, modify_file_1.default)(file, variables);
    }
}
