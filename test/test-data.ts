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
    newVersion: "1.2.0",
    newPhase: "private-beta",
    iteration: 2,
    newVersionName: "Version 1.2",
    notes: "This is a test version.",
    oldVersion: "1.1.0",
    oldPhase: "private-beta",
    itemsToClone: [{"type": "file", "path": "item1.js"}, {"type": "directory", "path": "item2/"}],
    itemsToUpdate: [{path: 'item3.js', find: 'old text', add: 'new text'}]
  },
  config: {
    version: "1.1.0",
    itemsToClone: [{"type": "file", "path": "item1.js"}, {"type": "directory", "path": "item2/"}]
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
