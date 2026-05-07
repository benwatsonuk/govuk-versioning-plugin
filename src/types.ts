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
  itemsToClone: ItemToClone[];
  itemsToUpdate?: ItemToUpdate[];
}

export type VersionToCreate = {
    version: string;
    phase?: string;
    config: Config;
}

export type ItemToClone = {
  type: "file" | "directory";
  path: string;
}

export type ItemToUpdate = {
  file: string;
  find: string;
  add: string;
}

export type Versions = Version[];
