"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateConfig = validateConfig;
exports.validateVersionsArray = validateVersionsArray;
exports.validateVersionToCreate = validateVersionToCreate;
const ajv_1 = __importDefault(require("ajv"));
const schema_json_1 = __importDefault(require("./schema.json"));
const ajv = new ajv_1.default({ allErrors: true, strict: false });
const validate = ajv.compile(schema_json_1.default);
function validateConfig(config) {
    var _a;
    if (!validate({ mode: "config", config: config })) {
        const message = (_a = validate.errors) === null || _a === void 0 ? void 0 : _a.map(err => `${err.instancePath || "Config"} ${err.message}`).join("\n");
        throw new Error(`Invalid config passed to govuk-versioning-plugin - please check the documentation to ensure the JSON schema you are passing matches what is expected:\n${message}`);
    }
    return config;
}
function validateVersionsArray(versions) {
    var _a;
    if (!validate({ mode: "versions", versions: versions })) {
        const message = (_a = validate.errors) === null || _a === void 0 ? void 0 : _a.map(err => `${err.instancePath || "Versions"} ${err.message}`).join("\n");
        throw new Error(`Invalid array of VERSIONS passed to govuk-versioning-plugin - please check the documentation to ensure the JSON schema you are passing matches what is expected:\n${message}`);
    }
    return versions;
}
function validateVersionToCreate(versionToCreate) {
    var _a;
    if (!validate({ mode: "versionToCreate", versionToCreate: versionToCreate })) {
        const message = (_a = validate.errors) === null || _a === void 0 ? void 0 : _a.map(err => `${err.instancePath || "VersionToCreate"} ${err.message}`).join("\n");
        throw new Error(`Invalid VersionToCreate passed to govuk-versioning-plugin - please check the documentation to ensure the JSON schema you are passing matches what is expected:\n${message}`);
    }
    return versionToCreate;
}
