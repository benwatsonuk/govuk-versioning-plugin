import fs from "fs/promises";
import resolvePath from "../utils/resolve-path";
import { Config, Versions, VersionToCreate } from "../types";

export default async function updateVersionsFile(
  versionsToCreate: VersionToCreate,
  versions: Versions,
  config: Config
): Promise<void> {

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
  }

  const filePath = resolvePath('versions.js');
  const content = `// This file is used by the govuk-versioning-plugin
  // Do not delete or modify this file unless you know what you are doing! Read the plugin's ReadMe for more information

  export const versions = ${JSON.stringify(updatedVersions, null, 2)};
  
  export const config = ${JSON.stringify(updatedConfig, null, 2)};
  `;

  await fs.writeFile(
    filePath,
    content,
    "utf8"
  );

  console.log("Versions.js updated");
}