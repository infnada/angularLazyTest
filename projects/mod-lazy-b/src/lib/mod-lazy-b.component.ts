import { Component, OnInit } from '@angular/core';
import {ModLazyAService} from "mod-lazy-a";

@Component({
  selector: 'lib-ModLazyB',
  template: `
    <p>
      mod-lazy-b works!
    </p>
  `,
  styles: []
})
export class ModLazyBComponent implements OnInit {

  constructor(private modLazyAService: ModLazyAService) {
    console.log('ModLazyB Component constructor');
  }

  ngOnInit() {
    console.log('Getting data from ModLazyB Component constructor');
    this.modLazyAService.getData();
  }

}
