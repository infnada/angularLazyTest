import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModLazyAService {

  private data = [];

  constructor() {
    console.log('ModLazyA Service constructor');
  }

  pushData(data) {
    this.data.push(data);
  }

  getData() {
    return this.data;
  }
}
