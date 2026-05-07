"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = run;
const clone_file_1 = __importDefault(require("./operations/clone-file"));
const clone_directory_1 = __importDefault(require("./operations/clone-directory"));
const modify_file_1 = __importDefault(require("./operations/modify-file"));
const update_versions_file_1 = __importDefault(require("./operations/update-versions-file"));
const create_variables_1 = __importDefault(require("./utils/create-variables"));
async function run(versionToCreate, versions, config) {
    for (const item of versionToCreate.itemsToClone || []) {
        if (item.type === "file") {
            await (0, clone_file_1.default)({ path: item.path, versionToCreate });
        }
        else if (item.type === "directory") {
            await (0, clone_directory_1.default)({ path: item.path, versionToCreate });
        }
    }
    const variables = (0, create_variables_1.default)(versionToCreate);
    for (const file of versionToCreate.itemsToUpdate || []) {
        await (0, modify_file_1.default)(file, variables);
    }
    await (0, update_versions_file_1.default)(versionToCreate, versions, config);
}
