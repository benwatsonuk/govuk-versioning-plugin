"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = cloneFile;
const promises_1 = __importDefault(require("fs/promises"));
const resolve_path_1 = __importDefault(require("../utils/resolve-path"));
async function cloneFile(item) {
    const newVersion = item.versionToCreate.newVersion;
    const oldVersion = item.versionToCreate.oldVersion;
    const newPhase = item.versionToCreate.newPhase;
    const oldPhase = item.versionToCreate.oldPhase;
    const from = item.path.replace("${oldVersion}", oldVersion).replace("${oldPhase}", oldPhase || "");
    const to = item.path.replace("${oldVersion}", newVersion).replace("${oldPhase}", newPhase || "");
    const source = (0, resolve_path_1.default)(from);
    const target = (0, resolve_path_1.default)(to);
    await promises_1.default.copyFile(source, target);
    console.log("File copied - " + target);
}
