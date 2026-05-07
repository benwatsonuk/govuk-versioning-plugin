import { VersionToCreate } from "./types";
import cloneFile from "./operations/clone-file";
import cloneDirectory from "./operations/clone-directory";
import modifyFile from "./operations/modify-file";
import createVariables from "./utils/create-variables";

export default async function run(
  versionToCreate: VersionToCreate
): Promise<void> {

  // for (const dir of config.cloneDirectories || []) {
  //   await cloneDirectory(dir);
  // }

  for (const item of versionToCreate.itemsToClone || []) {
    if (item.type === "file") {
      await cloneFile({ path: item.path, versionToCreate });
    } else if (item.type === "directory") {
      // await cloneDirectory(item);
    }
  }

  const variables = createVariables(versionToCreate);
  console.log(variables)
  for (const file of versionToCreate.itemsToUpdate || []) {
    await modifyFile(file, variables);
  }

}