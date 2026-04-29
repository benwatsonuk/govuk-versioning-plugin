const fs = require("fs").promises;
const path = require("path");

async function replaceInFiles(dir, replacements) {
  const entries = await fs.readdir(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      await replaceInFiles(fullPath, replacements);
      continue;
    }

    let content = await fs.readFile(fullPath, "utf8");

    for (const [find, replace] of replacements) {
      content = content.replace(find, replace);
    }

    await fs.writeFile(fullPath, content, "utf8");
  }
}

async function bumpVersion(appName, fromVersion, toVersion) {
  const viewsBase = path.join(
    process.cwd(),
    "app",
    "views",
    appName
  );

  const sourceDir = path.join(viewsBase, fromVersion);
  const targetDir = path.join(viewsBase, toVersion);

  await fs.cp(sourceDir, targetDir, {
    recursive: true,
    force: false
  });

  const fromNumber = fromVersion.replace("v", "");
  const toNumber = toVersion.replace("v", "");

  const replacements = [
    [
      new RegExp(`const version = ${fromNumber}`, "g"),
      `const version = ${toNumber}`
    ],
    [
      new RegExp(`"${fromVersion}"`, "g"),
      `"${toVersion}"`
    ],
    [
      new RegExp(`'/${appName}/${fromVersion}`, "g"),
      `'/${appName}/${toVersion}`
    ]
  ];

  await replaceInFiles(targetDir, replacements);

  console.log(`Created ${toVersion} from ${fromVersion}`);
}

module.exports = {
  bumpVersion
};