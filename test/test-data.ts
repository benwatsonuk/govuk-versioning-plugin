import { VersionToCreate, Versions, Config } from "../src/types";

export const testData: { versions: Versions; versionToCreate: VersionToCreate; config: Config } = {
  versions: [
    {
      iteration: 0,
      version: "1.0.0",
      createdOn: "2025-01-01T00:00:00Z",
      phase: "private-beta",
      notes: null
    },
    {
      iteration: 1,
      version: "1.1.0",
      createdOn: "2025-012-02T00:00:00Z",
      phase: "private-beta",
      notes: null
    }
  ],
  versionToCreate: {
    version: "1.2.0",
    phase: "private-beta",
    config: {
      version: "1.1.0",
      itemsToClone: ["item1", "item2"]
    }
  },
  config: {
    version: "1.1.0",
    itemsToClone: ["item1", "item2"]
  }
};

export const badTestData = {
  versions: [
    {
      iteration: 'blue',
      version: "1.0.0",
      createdOn: "2025-01-01T00:00:00Z",
      phase: "private-beta",
      notes: null
    },
    {
      iteration: 'green',
      version: "1.1.0",
      createdOn: "2025-012-02T00:00:00Z",
      phase: "private-beta",
      notes: null
    }
  ],
  versionToCreate: {
    phase: "private-beta",
    config: {
      itemsToClone: ["item1", "item2"]
    }
  },
  config: {
    
  }
};
