"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = resolvePath;
const path_1 = __importDefault(require("path"));
function resolvePath(relativePath) {
    const prototypeRoot = process.cwd();
    return path_1.default.join(prototypeRoot, relativePath);
}
