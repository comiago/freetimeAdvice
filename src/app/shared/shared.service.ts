import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  public siteName : string;

  constructor() {
    this.siteName ='Freetime Advice'
  }
}
