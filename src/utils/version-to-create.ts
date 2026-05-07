import { config } from "process";
import { Config, Version, VersionToCreate } from "../types";
import askQuestion from "./prompt-user";

type PluginInput = {
  config: Config;
  versions: Version[];
};

export default async function createVersionToCreate({  
  config,   
  versions
}: PluginInput): Promise<VersionToCreate> {
  console.log("GOV.UK Versioning Plugin -- STARTED");
  
  const latestVersion = versions[versions.length - 1];
  
  const currentPhase =
    latestVersion.phase ||
    config.phase ||
    "alpha";

  const currentVersionNumber = Number(
    latestVersion.version.replace("v", "")
  );

  const suggestedVersionNumber =
    currentVersionNumber + 1;

  console.log("\nCurrent latest version:");
  console.log(latestVersion);

  // --- PHASE ---

  const phaseAnswer = await askQuestion(
    `Phase for new version: (${currentPhase}) [Y to keep current]: `
  );

  const nextPhase =
    !phaseAnswer || phaseAnswer.toLowerCase() === "y"
      ? currentPhase
      : phaseAnswer;
  
      // --- VERSION ---

  const versionAnswer = await askQuestion(
    `New version number (${suggestedVersionNumber}) [Y to accept]: `
  );

  const nextVersionNumber =
    !versionAnswer || versionAnswer.toLowerCase() === "y"
      ? suggestedVersionNumber
      : Number(versionAnswer);

  const nextVersion = `v${nextVersionNumber}`;

  // --- NOTES ---
  const notesAnswer = await askQuestion(
    "Notes for this version (optional, press enter to skip): "
  );

  const nextNotes =
    notesAnswer.trim().length > 0
      ? notesAnswer.trim()
      : undefined;

  // --- VERSION NAME ---
  const versionNameAnswer = await askQuestion(
    "Version name (optional, press enter to skip): "
  );

  const nextVersionName =
    versionNameAnswer.trim().length > 0
      ? versionNameAnswer.trim()
      : nextVersion + " (" + (nextPhase || "no phase") + ")";

  const versionToCreate = {
    newVersion: nextVersion,
    newPhase: nextPhase,
    newVersionName: nextVersionName,
    notes: nextNotes,
    iteration: latestVersion.iteration + 1,
    oldVersion: config.version,
    oldPhase: config.phase,
    itemsToClone: config.itemsToClone,
    itemsToUpdate: config.itemsToUpdate
  };

  console.log("\nGenerated versionToCreate:");
  console.log(versionToCreate);

  return versionToCreate;
}