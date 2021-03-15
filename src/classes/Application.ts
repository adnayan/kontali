export class Application {
  private _fileName: string;
  constructor() {
    this._fileName = "";
  }

  get fileName(): string {
    return this._fileName;
  }
}
