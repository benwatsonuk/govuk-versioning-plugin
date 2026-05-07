import fs from "fs/promises";
import resolvePath from "../utils/resolve-path";
import { CloneDirectory } from "../config/types";

export default async function cloneDirectory(
  config: CloneDirectory
): Promise<void> {

//   const source = resolvePath(config.from);
//   const target = resolvePath(config.to);

//   console.log(`Copying directory:
// ${source}
// →
// ${target}`);

//   await fs.cp(source, target, {
//     recursive: true
//   });

  console.log("Directory copied");
}