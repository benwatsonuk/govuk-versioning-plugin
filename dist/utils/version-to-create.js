"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = createVersionToCreate;
const prompt_user_1 = __importDefault(require("./prompt-user"));
async function createVersionToCreate({ config, versions }) {
    console.log("GOV.UK Versioning Plugin -- STARTED");
    const latestVersion = versions[versions.length - 1];
    const currentPhase = latestVersion.phase ||
        config.phase ||
        "alpha";
    const currentVersionNumber = Number(latestVersion.version.replace("v", ""));
    const suggestedVersionNumber = currentVersionNumber + 1;
    console.log("\nCurrent latest version:");
    console.log(latestVersion);
    // --- PHASE ---
    const phaseAnswer = await (0, prompt_user_1.default)(`Phase for new version: (${currentPhase}) [Y to keep current]: `);
    const nextPhase = !phaseAnswer || phaseAnswer.toLowerCase() === "y"
        ? currentPhase
        : phaseAnswer;
    // --- VERSION ---
    const versionAnswer = await (0, prompt_user_1.default)(`New version number (${suggestedVersionNumber}) [Y to accept]: `);
    const nextVersionNumber = !versionAnswer || versionAnswer.toLowerCase() === "y"
        ? suggestedVersionNumber
        : Number(versionAnswer);
    const nextVersion = `v${nextVersionNumber}`;
    // --- NOTES ---
    const notesAnswer = await (0, prompt_user_1.default)("Notes for this version (optional, press enter to skip): ");
    const nextNotes = notesAnswer.trim().length > 0
        ? notesAnswer.trim()
        : null;
    const versionToCreate = {
        newVersion: nextVersion,
        newPhase: nextPhase,
        newVersionName: `${nextVersion} (${nextPhase})`,
        notes: nextNotes,
        oldVersion: config.version,
        oldPhase: config.phase,
        itemsToClone: config.itemsToClone,
        itemsToUpdate: config.itemsToUpdate
    };
    console.log("\nGenerated versionToCreate:");
    console.log(versionToCreate);
    return versionToCreate;
}
