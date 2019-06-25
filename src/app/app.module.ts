import {BrowserModule} from '@angular/platform-browser';
import {COMPILER_OPTIONS, CompilerFactory, Compiler, NgModule} from '@angular/core';
import {JitCompilerFactory} from '@angular/platform-browser-dynamic';

import {ModLoaderModule} from 'mod-loader';

import {AppComponent} from './app.component';

export function createCompiler(fn: CompilerFactory): Compiler {
  return fn.createCompiler();
}

// Prepare output for SystemJS
declare const SystemJS: any;
import * as angularCore from '@angular/core';
import * as angularCommon from '@angular/common';
SystemJS.set('@angular/core', SystemJS.newModule(angularCore));
SystemJS.set('@angular/common', SystemJS.newModule(angularCommon));

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ModLoaderModule
  ],
  providers: [
    {
      provide: COMPILER_OPTIONS,
      useValue: {},
      multi: true
    },
    {
      provide: CompilerFactory,
      useClass: JitCompilerFactory,
      deps: [COMPILER_OPTIONS]
    },
    {
      provide: Compiler,
      useFactory: createCompiler,
      deps: [CompilerFactory]
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
