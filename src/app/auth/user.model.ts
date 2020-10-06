export class User {
  constructor(
    public email: string,
    public localId: string,
    private _token: string,
    private expirationDate: Date
  ) {}
}
