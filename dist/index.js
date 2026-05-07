"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = plugin;
const runner_1 = __importDefault(require("./runner"));
const version_to_create_1 = __importDefault(require("./utils/version-to-create"));
const validate_1 = require("./validate");
function plugin(config, versions) {
    const validatedConfig = (0, validate_1.validateConfig)(config);
    const validatedVersions = (0, validate_1.validateVersionsArray)(versions);
    const versionToCreatePromise = (0, version_to_create_1.default)({ config: validatedConfig, versions: validatedVersions });
    const validatedVersionToCreatePromise = versionToCreatePromise.then(validate_1.validateVersionToCreate);
    return {
        run: async () => {
            const validatedVersionToCreate = await validatedVersionToCreatePromise;
            await (0, runner_1.default)(validatedVersionToCreate, versions, config);
            console.log("GOV.UK Versioning Plugin -- COMPLETE");
        }
    };
}
