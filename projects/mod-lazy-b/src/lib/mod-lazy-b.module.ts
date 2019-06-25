import { NgModule } from '@angular/core';

import { ModLazyAService } from 'mod-lazy-a';

import { ModLazyBComponent } from './mod-lazy-b.component';

@NgModule({
  declarations: [ModLazyBComponent],
  imports: [
  ],
  exports: [ModLazyBComponent]
})
export class ModLazyBModule {
  constructor(private modLazyAService: ModLazyAService) {
    console.log('ModLazyB Module constructor');

    console.log('Getting data from ModLazyB Module constructor');
    this.modLazyAService.getData();
  }
}
