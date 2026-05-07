import fs from "fs/promises";
import resolvePath from "../utils/resolve-path";
import { ModifyFile } from "../config/types";

export default async function modifyFile(
  config: ModifyFile
): Promise<void> {
  const targetFile = resolvePath(config.file);

  let content = await fs.readFile(
    targetFile,
    "utf8"
  );

  for (const replacement of config.replacements) {
    content = content.replace(
      new RegExp(replacement.find, "g"),
      replacement.replace
    );
  }

  await fs.writeFile(
    targetFile,
    content,
    "utf8"
  );

  console.log(`Modified ${config.file}`);
}