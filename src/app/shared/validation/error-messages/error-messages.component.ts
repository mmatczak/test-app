import { Component, Input, OnDestroy } from '@angular/core';
import { FormControl, FormGroupDirective } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';
import { ErrorStateMatcher } from '@angular/material';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-error-messages',
  exportAs: 'errorMsgs',
  templateUrl: './error-messages.component.html',
  styleUrls: ['./error-messages.component.scss']
})
export class ErrorMessagesComponent implements OnDestroy {
  private _ofFormControl: FormControl;
  private statusChangesSubscription;

  errorMessages: string[];

  @Input()
  ofForm: FormGroupDirective;

  @Input()
  set ofFormControl(newFormControl: FormControl) {
    this.unsubscribeFromStatusChanges();
    this._ofFormControl = newFormControl;
    if (this._ofFormControl) {
      this.statusChangesSubscription = this._ofFormControl.statusChanges
        .pipe(
          startWith(this._ofFormControl.status),
          map(status => status === 'INVALID' ? this.getErrors() : [])
        )
        // we subscribe directly instead of using the async pipe as it subscribes (sometimes) too late and misses some status changes
        .subscribe((errorMessages) => this.errorMessages = errorMessages);
    }
  }

  constructor(private errorStateMatcher: ErrorStateMatcher, private translate: TranslateService) {
  }

  errorsShouldBeShown() {
    const form = this.ofForm || null;
    return this.errorStateMatcher.isErrorState(this._ofFormControl, form);
  }

  ngOnDestroy(): void {
    this.unsubscribeFromStatusChanges();
  }

  private getErrors(): string[] {
    const errors = this._ofFormControl ? this._ofFormControl.errors : null;
    if (errors) {
      return Object.keys(errors)
        .map(errorCode => this.translate.instant(`errors.${errorCode}`, errors[errorCode]));
    }
    return [];
  }

  private unsubscribeFromStatusChanges() {
    if (this.statusChangesSubscription) {
      this.statusChangesSubscription.unsubscribe();
    }
  }
}
