import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MyAppValidators } from '../../../shared/validation/my-app-validators';

@Component({
  selector: 'app-order-search',
  templateUrl: './order-search.component.html',
  styleUrls: ['./order-search.component.scss']
})
export class OrderSearchComponent implements OnInit {
  orderSearchForm;

  constructor(formBuilder: FormBuilder) {
    this.orderSearchForm = formBuilder.group({
      orderKey: ['', [Validators.required, MyAppValidators.isSuperHero]],
      product: ['', [Validators.required]]
    });
  }

  ngOnInit() {
  }

  search() {
    if (this.orderSearchForm.valid) {
      console.log('Searching for....');
      console.log(this.orderSearchForm.value);
    }
  }
}


