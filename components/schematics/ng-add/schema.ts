export enum ProjectTemplate {
  Blank = 'blank',
  Login = 'login'
}

export interface Schema {
  /** Name of the project to target. */
  project?: string;
  template?: ProjectTemplate;
}
