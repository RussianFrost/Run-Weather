export class BackUrls {
  private static _Prod: string = "https://api.weatherapi.com/v1/";

  public static get Prod(): string {
    return this._Prod;
  }
}
