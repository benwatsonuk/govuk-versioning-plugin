"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = createVariables;
function createVariables(versionToCreate) {
    return {
        newVersion: versionToCreate.newVersion,
        newPhase: versionToCreate.newPhase,
        oldVersion: versionToCreate.oldVersion,
        oldPhase: versionToCreate.oldPhase,
    };
}
