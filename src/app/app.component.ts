import { Component, OnDestroy, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { UserService } from './shared/user/user.service';
import { map, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  private unsubscribe = new Subject();

  constructor(private readonly translate: TranslateService, private readonly user: UserService) {
  }

  ngOnInit(): void {
    this.user.getCurrent()
      .pipe(
        takeUntil(this.unsubscribe),
        map(currentUser => currentUser.lang)
      )
      .subscribe(lang => this.translate.use(lang));
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
