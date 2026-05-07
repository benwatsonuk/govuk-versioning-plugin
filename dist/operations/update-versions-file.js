"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = updateVersionsFile;
const promises_1 = __importDefault(require("fs/promises"));
const resolve_path_1 = __importDefault(require("../utils/resolve-path"));
async function updateVersionsFile(versionsToCreate, versions, config) {
    console.log("Updating versions.js");
    const updatedVersions = [
        ...versions,
        {
            iteration: versionsToCreate.iteration,
            phase: versionsToCreate.newPhase,
            version: versionsToCreate.newVersion,
            name: versionsToCreate.newVersionName,
            notes: versionsToCreate.notes,
            createdOn: new Date().toISOString(),
        }
    ];
    const updatedConfig = {
        ...config,
        version: versionsToCreate.newVersion,
        phase: versionsToCreate.newPhase
    };
    const filePath = (0, resolve_path_1.default)('versions.js');
    const content = `// This file is used by the govuk-versioning-plugin
  // Do not delete or modify this file unless you know what you are doing! Read the plugin's ReadMe for more information

  export const versions = ${JSON.stringify(updatedVersions, null, 2)};
  
  export const config = ${JSON.stringify(updatedConfig, null, 2)};
  `;
    await promises_1.default.writeFile(filePath, content, "utf8");
    console.log("Versions.js updated");
}
