import path from "path";

export default function resolvePath(
  relativePath: string
): string {
  const prototypeRoot = process.cwd();

  return path.join(
    prototypeRoot,
    relativePath
  );
}