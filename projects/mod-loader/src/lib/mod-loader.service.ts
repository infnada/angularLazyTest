import {Injectable, Injector, Compiler, NgModuleFactory} from '@angular/core';

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

      return this.compiler.compileModuleAsync(moduleToCompile[lazyMod.name]);
    }).then((modFac: NgModuleFactory<any>) => {
      modFac.create(this.injector);

      lazyMod.factory = modFac;

      return lazyMod;
    });

  }
}
