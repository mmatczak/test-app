import { NgModule } from '@angular/core';
import { MatButtonModule, MatInputModule, MatToolbarModule } from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    MatInputModule,
    MatToolbarModule
  ],
  exports: [
    MatInputModule,
    MatToolbarModule,
    MatButtonModule]
})
export class TestAppMaterialModule {
}
