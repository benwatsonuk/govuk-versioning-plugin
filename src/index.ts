import run from "./runner";
import { Config, Versions } from "./types";
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
            await run(validatedVersionToCreate);
            console.log("GOV.UK Versioning Plugin -- COMPLETE");
        }
    };
}