export interface CloneDirectory {
  from: string;
  to: string;
}

export interface CloneFile {
  from: string;
  to: string;
}

export interface Replacement {
  find: string;
  replace: string;
}

export interface ModifyFile {
  file: string;
  replacements: Replacement[];
}
