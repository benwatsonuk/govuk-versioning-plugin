import { VersionToCreate } from "../types";

export interface CloneDirectory {
  path: string;
  versionToCreate: VersionToCreate;
}

export interface CloneFile {
  path: string;
  versionToCreate: VersionToCreate;
}

export interface Replacement {
  find: string;
  replace: string;
}

export interface ModifyFile {
  file: string;
  replacements: Replacement[];
}
