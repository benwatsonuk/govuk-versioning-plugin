"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = plugin;
const runner_1 = __importDefault(require("./runner"));
const validate_1 = require("./validate");
function plugin(config, versionToCreate) {
    const validatedConfig = (0, validate_1.validateConfig)(config);
    const validatedVersionToCreate = (0, validate_1.validateVersionToCreate)(versionToCreate);
    return {
        run: async () => {
            await (0, runner_1.default)(validatedConfig, validatedVersionToCreate);
        }
    };
}
