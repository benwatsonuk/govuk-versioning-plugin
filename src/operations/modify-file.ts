import fs from "fs/promises";
import resolvePath from "../utils/resolve-path";
import { ModifyFile } from "../config/types";
import interpolate from "../utils/interpolate";

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

  if (!content.includes(find)) {
    throw new Error(
      `Could not find target string in ${file.path}`
    );
  }

  if (file.type === "replace") {
    content = content.replace(find, value);
  }

  if (file.type === "add") {
    content = content.replace(
      find,
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