"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = plugin;
const runner_1 = __importDefault(require("./runner"));
function plugin(config, versionToCreate) {
    return {
        run: async () => {
            await (0, runner_1.default)(config, versionToCreate);
        }
    };
}
