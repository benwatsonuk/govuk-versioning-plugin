import fs from "fs/promises";
import resolvePath from "../utils/resolve-path";
import { CloneDirectory } from "../config/types";

export default async function cloneDirectory(
  item: CloneDirectory
): Promise<void> {
  const newVersion = item.versionToCreate.newVersion;
  const oldVersion = item.versionToCreate.oldVersion;
  const newPhase = item.versionToCreate.newPhase;
  const oldPhase = item.versionToCreate.oldPhase;
  const from = item.path.replace("${oldVersion}", oldVersion).replace("${oldPhase}", oldPhase || "");
  const to = item.path.replace("${oldVersion}", newVersion).replace("${oldPhase}", newPhase || "");
  const source = resolvePath(from);
  const target = resolvePath(to);

  console.log(`Copying directory:
${source}
→
${target}`);

  await fs.cp(source, target, {
    recursive: true
  });

  console.log("Directory copied - " + target);
}