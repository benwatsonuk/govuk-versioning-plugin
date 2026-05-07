import fs from "fs/promises";
import resolvePath from "../utils/resolve-path";
import { ModifyFile } from "../config/types";
import interpolate from "../utils/interpolate";

function escapeRegExp(value: string): string {
  return value.replace(
    /[.*+?^${}()|[\]\\]/g,
    "\\$&"
  );
}

export default async function modifyFile(
  file: ModifyFile,
  variables: Record<string, string>
): Promise<void> {

  const path = interpolate(
    file.path,
    variables
  );
  const filePath = resolvePath(path);

  let content = await fs.readFile(
    filePath,
    "utf8"
  );

  const find = interpolate(
    file.find,
    variables
  );

  const value = interpolate(
    file.value,
    variables
  );

// Use regex with global flag so ALL matches are handled
  const findRegex = new RegExp(
    escapeRegExp(find),
    "g"
  );

  // Gracefully handle missing target string
  if (!findRegex.test(content)) {
    console.warn(
      `[Version Plugin] Skipped: could not find target string in ${file.path}`
    );

    return;
  }

  if (file.type === "replace") {
    content = content.replace(findRegex, value);
  }

  if (file.type === "add") {
    content = content.replace(
      findRegex,
      `${find}\n${value}`
    );
  }

  await fs.writeFile(
    filePath,
    content,
    "utf8"
  );

  console.log(`Updated ${file.path}`);
}