export type Version = {
  iteration: number;
  version: string;
  phase?: string;
  notes?: string | null;
  createdOn: string;
}

export type Config = {
  itemsToClone: string[];
}

export type VersionToCreate = {
    version: string;
    phase: string;
    config: Config;
}

export type Versions = Version[];
