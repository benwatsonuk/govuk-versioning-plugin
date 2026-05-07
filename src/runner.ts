import { VersionToCreate } from "./types";
import cloneFile from "./operations/clone-file";
import cloneDirectory from "./operations/clone-directory";
import modifyFile from "./operations/modify-file";

export default async function run(
  versionToCreate: VersionToCreate
): Promise<void> {

  // for (const dir of config.cloneDirectories || []) {
  //   await cloneDirectory(dir);
  // }

  // for (const file of config.cloneFiles || []) {
  //   await cloneFile(file);
  // }

  // for (const file of config.modifyFiles || []) {
  //   await modifyFile(file);
  // }

}