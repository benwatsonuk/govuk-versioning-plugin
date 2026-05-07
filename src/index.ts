import run from "./runner";
import { VersionToCreate, Config } from "./types";
import { validateVersionToCreate, validateConfig } from "./validate";

export default function plugin(config: Config, versionToCreate: VersionToCreate) {
    const validatedConfig = validateConfig(config);
    const validatedVersionToCreate = validateVersionToCreate(versionToCreate);

    return {
        run: async () => {
        await run(validatedConfig, validatedVersionToCreate);
        }
    };
}