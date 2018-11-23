import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestAppMaterialModule } from './test-app-material.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TestAppMaterialModule,
    TranslateModule
  ],
  exports: [
    CommonModule,
    TestAppMaterialModule,
    TranslateModule
  ]
})
export class SharedModule {
}
