"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { bumpVersion } = require("../lib/version-bumper");
const [appName, fromVersion, toVersion] = process.argv.slice(2);
if (!appName || !fromVersion || !toVersion) {
    console.log("Usage: npm run bump-version");
    process.exit(1);
}
bumpVersion(appName, fromVersion, toVersion)
    .catch(console.error);
