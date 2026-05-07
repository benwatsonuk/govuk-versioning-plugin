"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = modifyFile;
const promises_1 = __importDefault(require("fs/promises"));
const resolve_path_1 = __importDefault(require("../utils/resolve-path"));
const interpolate_1 = __importDefault(require("../utils/interpolate"));
async function modifyFile(file, variables) {
    const path = (0, interpolate_1.default)(file.path, variables);
    const filePath = (0, resolve_path_1.default)(path);
    let content = await promises_1.default.readFile(filePath, "utf8");
    const find = (0, interpolate_1.default)(file.find, variables);
    const value = (0, interpolate_1.default)(file.value, variables);
    if (!content.includes(find)) {
        throw new Error(`Could not find target string in ${file.path}`);
    }
    if (file.type === "replace") {
        content = content.replace(find, value);
    }
    if (file.type === "add") {
        content = content.replace(find, `${find}\n${value}`);
    }
    await promises_1.default.writeFile(filePath, content, "utf8");
    console.log(`Updated ${file.path}`);
}
