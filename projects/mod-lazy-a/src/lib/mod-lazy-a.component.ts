import { Component, OnInit } from '@angular/core';
import {ModLazyAService} from "./mod-lazy-a.service";

@Component({
  selector: 'lib-ModLazyA',
  template: `
    <p>
      mod-lazy-a works!
    </p>
  `,
  styles: []
})
export class ModLazyAComponent implements OnInit {

  constructor(private modLazyAService: ModLazyAService) {
    console.log('ModLazyA Component constructor');
  }

  ngOnInit() {
    console.log('Pushing data from ModLazyA Component ngOnInit');
    this.modLazyAService.pushData('some Data from ModLazyA Component ngOnInit');
  }

}
