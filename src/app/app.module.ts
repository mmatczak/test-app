import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material';
import { OrderModule } from './order/order.module';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { translationDE } from './shared/i18n/translation-de';
import { translationEN } from './shared/i18n/translation-en';
import { UserService } from './shared/user/user.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    TranslateModule.forRoot(),
    MatToolbarModule,
    // feature modules
    OrderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(translate: TranslateService, user: UserService) {
    translate.setTranslation('de', translationDE);
    translate.setTranslation('en', translationEN);
    translate.setDefaultLang('de');

    user.getTranslations().subscribe(translations => {
        translate.setTranslation('de', {...translationDE, ...translations['de']});
        translate.setTranslation('en', {...translationEN, ...translations['en']});
      }
    );
  }
}
