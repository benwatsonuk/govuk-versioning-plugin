export type Iteration = {
  phase: string;
  version: number;
  notes?: string | null;
};

export type Page = {
  id: number;
  title: string;
  route: string;
  type?: string | null;
  stage?: {
    main: string;
    subStage?: number | string;
  };
  description?: string | null;
  newPage?: boolean | null;
  iterations: Iteration[];
};

export type PagesArray = Page[];

export type SubStage = {
  id: string | number;
  title: string;
  route?: string;
  description?: string | null;
};

export type Stage = {
  id: string;
  title: string;
  route: string;
  description?: string | null;
  subStages: SubStage[];
};

export type StagesArray = Stage[];

export type Step = {
  pageId: number;
};

export type PageFlow = {
  id: number;
  title: string;
  description: string;
  user: string;
  steps: Step[];
};

export type PageFlowArray = PageFlow[];