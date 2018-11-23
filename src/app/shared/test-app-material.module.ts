import { NgModule } from '@angular/core';
import { MatInputModule, MatToolbarModule } from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    MatInputModule,
    MatToolbarModule
  ],
  exports: [
    MatInputModule,
    MatToolbarModule]
})
export class TestAppMaterialModule {
}
