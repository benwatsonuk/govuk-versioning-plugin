import run from "./runner";
import { Config, Versions } from "./types";
import resolvePath from "./utils/resolve-path";
import createVersionToCreate from "./utils/version-to-create";
import { validateVersionToCreate, validateConfig, validateVersionsArray } from "./validate";

export default function plugin(config: Config, versions: Versions) {
    const validatedConfig = validateConfig(config);
    const validatedVersions = validateVersionsArray(versions);
    const versionToCreatePromise = createVersionToCreate({config: validatedConfig, versions: validatedVersions});
    const validatedVersionToCreatePromise = versionToCreatePromise.then(validateVersionToCreate);

    return {
        run: async () => {
            const validatedVersionToCreate = await validatedVersionToCreatePromise;
            await run(validatedVersionToCreate, versions, config);
            console.log("GOV.UK Versioning Plugin -- COMPLETE");
        }
    };
}

export const viewsPath = resolvePath(
  "../app/views"
);