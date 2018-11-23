import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestAppMaterialModule } from './test-app-material.module';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ErrorMessagesComponent } from './validation/error-messages/error-messages.component';

@NgModule({
  declarations: [ErrorMessagesComponent],
  imports: [
    CommonModule,
    TestAppMaterialModule,
    TranslateModule
  ],
  exports: [
    CommonModule,
    TestAppMaterialModule,
    TranslateModule,
    ReactiveFormsModule,
    ErrorMessagesComponent
  ]
})
export class SharedModule {
}
