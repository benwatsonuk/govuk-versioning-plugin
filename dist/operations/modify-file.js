"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = modifyFile;
const promises_1 = __importDefault(require("fs/promises"));
const resolve_path_1 = __importDefault(require("../utils/resolve-path"));
async function modifyFile(config) {
    const targetFile = (0, resolve_path_1.default)(config.file);
    let content = await promises_1.default.readFile(targetFile, "utf8");
    for (const replacement of config.replacements) {
        content = content.replace(new RegExp(replacement.find, "g"), replacement.replace);
    }
    await promises_1.default.writeFile(targetFile, content, "utf8");
    console.log(`Modified ${config.file}`);
}
