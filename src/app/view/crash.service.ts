import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CrashService {

  private crashData;

  constructor() { }

  setCrashData(crash) {
    this.crashData = crash;
  }

  getCrashData() {
    return { ...this.crashData };
  }
}
