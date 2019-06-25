import {Compiler, Component, Injector, ViewChild, ViewContainerRef} from '@angular/core';
import {ModLoaderService} from "../../projects/mod-loader/src/lib/mod-loader.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('lazyComponentAView', {read: ViewContainerRef}) lazyComponentAView;
  @ViewChild('lazyComponentBView', {read: ViewContainerRef}) lazyComponentBView;

  constructor(private compiler: Compiler,
              private injector: Injector,
              private modLoaderService: ModLoaderService) {

    const modules = [
      {
        url: 'https://raw.githubusercontent.com/infnada/angularLazyTest/master/dist/mod-lazy-a/bundles/mod-lazy-a.umd.js',
        name: 'ModLazyAModule'
      },
      {
        url: 'https://raw.githubusercontent.com/infnada/angularLazyTest/master/dist/mod-lazy-b/bundles/mod-lazy-b.umd.js',
        name: 'ModLazyBModule'
      }
    ];

    // Load lazy module A
    this.modLoaderService.loadLazyModule(modules[0]).then((lazyMod) => {

      // Load module component
      const componentAFactory = lazyMod.factory.componentFactories.filter((component) => {
        return component.componentType.name === 'ModLazyAComponent';
      })[0];

      this.lazyComponentAView.createComponent(componentAFactory);

    });

    console.log('Waiting before importing LazyModuleB');
    setTimeout(() => {
      // Load lazy module B
      this.modLoaderService.loadLazyModule(modules[1]).then((lazyMod) => {

        // Load module component
        const componentBFactory = lazyMod.factory.componentFactories.filter((component) => {
          return component.componentType.name === 'ModLazyBComponent';
        })[0];

        this.lazyComponentBView.createComponent(componentBFactory, 0, this.injector);
      });

    }, 1000);
  }


}
