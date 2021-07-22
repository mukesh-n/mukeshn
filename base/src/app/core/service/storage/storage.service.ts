import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  private _permanent: string = '';
  private _temporary: string = '';
  constructor() {}

  public get temporary(): string {
    return this._temporary;
  }

  public set temporary(v: string) {
    this._temporary = v;
  }

  public get permanent(): string {
    if (this._permanent.length == 0) {
      let permanent = localStorage.getItem('permanent');
      if (permanent) {
        this._permanent = permanent;
      }
    }
    return this._permanent;
  }

  public set permanent(v: string) {
    localStorage.setItem('permanent', v);
    this._permanent = v;
  }
}
