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
  newVersion: string;
  newPhase?: string;
  iteration: number;
  newVersionName?: string;
  notes?: string | null;
  oldVersion: Config["version"];
  oldPhase?: Config["phase"];
  itemsToClone: Config["itemsToClone"];
  itemsToUpdate?: Config["itemsToUpdate"];
}

export type ItemToClone = {
  type: "file" | "directory";
  path: string;
}

export type ItemToUpdate = {
  path: string;
  find: string;
  type: "add" | "replace";
  value: string;
}

export type ModifyFileVariables = {
  newVersion: string;
  newPhase?: string;
  oldVersion: string;
  oldPhase?: string;
}

export type Versions = Version[];
