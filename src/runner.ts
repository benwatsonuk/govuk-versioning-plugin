import { Config, VersionToCreate, Versions } from "./types";
import cloneFile from "./operations/clone-file";
import cloneDirectory from "./operations/clone-directory";
import modifyFile from "./operations/modify-file";
import updateVersionsFile from "./operations/update-versions-file";
import createVariables from "./utils/create-variables";

export default async function run(
  versionToCreate: VersionToCreate,
  versions: Versions,
  config: Config
): Promise<void> {

  for (const item of versionToCreate.itemsToClone || []) {
    if (item.type === "file") {
      await cloneFile({ path: item.path, versionToCreate });
    } else if (item.type === "directory") {
      await cloneDirectory({ path: item.path, versionToCreate });
    }
  }

  const variables = createVariables(versionToCreate);

  for (const file of versionToCreate.itemsToUpdate || []) {
    await modifyFile(file, variables);
  }

  await updateVersionsFile(versionToCreate, versions, config);

}