export interface IPolicyModel {
  src: string;
  dest: string;
  action: Action;
}

export enum Action {
  ALLOW,
  DENY,
}
