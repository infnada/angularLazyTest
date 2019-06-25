import {Injectable, Injector, Compiler} from '@angular/core';

declare const SystemJS: any;

@Injectable({
  providedIn: 'root'
})
export class ModLoaderService {

  constructor(private compiler: Compiler,
              private injector: Injector) {
  }

  loadLazyModule(lazyMod) {

    console.log(`Loading Module ${lazyMod.name}`);
    return SystemJS.import(lazyMod.url).then((moduleToCompile) => {

      return this.compiler.compileModuleAndAllComponentsAsync(moduleToCompile[lazyMod.name]);
    }).then((comp) => {
      comp.ngModuleFactory.create(this.injector);

      lazyMod.factory = comp;

      return lazyMod;
    });

  }
}
