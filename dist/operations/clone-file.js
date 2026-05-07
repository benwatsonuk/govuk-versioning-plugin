"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = cloneFile;
const promises_1 = __importDefault(require("fs/promises"));
const resolve_path_1 = __importDefault(require("../utils/resolve-path"));
async function cloneFile(config) {
    const source = (0, resolve_path_1.default)(config.from);
    const target = (0, resolve_path_1.default)(config.to);
    await promises_1.default.copyFile(source, target);
    console.log("File copied");
}
