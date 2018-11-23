import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface User {
  name: string;
  lang: string;
}

export interface Translations {
  [lang: string]: { [labelKey: string]: string };
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() {
  }

  getCurrent(): Observable<User> {
    return of({
      name: 'Test User',
      lang: 'en'
    });
  }

  getTranslations(): Observable<Translations> {
    return new Observable<Translations>(subscribe => {
      setTimeout(() => {
        subscribe.next({
          'en': {
            policy: 'Privacy Policy',
            copyright: 'Copyright'
          },
          'de': {
            policy: 'Privatregeln',
            copyright: 'Kopierechte'
          }
        });
        subscribe.complete();
      }, 3000);
    });
  }
}
