import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestAppMaterialModule } from './test-app-material.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TestAppMaterialModule
  ],
  exports: [
    CommonModule,
    TestAppMaterialModule
  ]
})
export class SharedModule {
}
