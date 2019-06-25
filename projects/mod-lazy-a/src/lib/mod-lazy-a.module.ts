import { NgModule } from '@angular/core';
import { ModLazyAComponent } from './mod-lazy-a.component';
import { ModLazyAService } from './mod-lazy-a.service';

@NgModule({
  declarations: [ModLazyAComponent],
  imports: [
  ],
  exports: [ModLazyAComponent]
})
export class ModLazyAModule {
  constructor(private modLazyAService: ModLazyAService) {
    console.log('ModLazyA Module constructor');

    console.log('Pushing data from ModLazyA Module constructor');
    this.modLazyAService.pushData('some Data from ModLazyA Module constructor');
    console.log('data', this.modLazyAService.getData());
  }
}
