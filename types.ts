export type Version = {
  iteration: number;
  version: string;
  phase?: string;
  notes?: string;
  createdOn: Date;
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
