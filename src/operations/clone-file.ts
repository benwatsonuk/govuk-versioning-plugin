import fs from "fs/promises";
import resolvePath from "../utils/resolve-path";
import { CloneFile } from "../config/types";

export default async function cloneFile(
  item: CloneFile
): Promise<void> {
  const newVersion = item.versionToCreate.newVersion;
  const oldVersion = item.versionToCreate.oldVersion;
  const newPhase = item.versionToCreate.newPhase;
  const oldPhase = item.versionToCreate.oldPhase;
  const from = item.path.replace("${oldVersion}", oldVersion).replace("${oldPhase}", oldPhase || "");
  const to = item.path.replace("${oldVersion}", newVersion).replace("${oldPhase}", newPhase || "");
  const source = resolvePath(from);
  const target = resolvePath(to);

  await fs.copyFile(source, target);

  console.log("File copied - " + target);
}