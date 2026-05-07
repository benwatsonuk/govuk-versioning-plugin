import run from "./runner";
import { VersionToCreate, Config } from "./types";

export default function plugin(config: Config, versionToCreate: VersionToCreate) {
  return {
    run: async () => {
      await run(config, versionToCreate);
    }
  };
}