export interface IUserStore {
  isAuthorized: string | null | void;
  token: string | null;
}
