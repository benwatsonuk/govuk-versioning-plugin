import fs from "fs/promises";
import resolvePath from "../utils/resolve-path";
import { CloneFile } from "../config/types";

export default async function cloneFile(
  config: CloneFile
): Promise<void> {
  const source = resolvePath(config.from);
  const target = resolvePath(config.to);

  await fs.copyFile(source, target);

  console.log("File copied");
}