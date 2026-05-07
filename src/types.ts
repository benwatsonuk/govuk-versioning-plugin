export type Version = {
  iteration: number;
  version: string;
  phase?: string;
  name?: string;
  notes?: string | null;
  createdOn: string;
}

export type Config = {
  phase?: string;
  version: string;
  itemsToClone: string[];
  itemsToUpdate?: ItemToUpdate[];
}

export type VersionToCreate = {
    version: string;
    phase?: string;
    config: Config;
}

export type ItemToUpdate = {
  file: string;
  find: string;
  add: string;
}

export type Versions = Version[];
