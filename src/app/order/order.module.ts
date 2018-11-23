import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { OrderSearchComponent } from './components/order-search/order-search.component';
import { OrderOverviewComponent } from './components/order-overview/order-overview.component';
import { OrderDetailsComponent } from './components/order-details/order-details.component';

@NgModule({
  declarations: [OrderSearchComponent, OrderOverviewComponent, OrderDetailsComponent],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: 'orders',
        children: [
          {
            path: '',
            component: OrderOverviewComponent
          },
          {
            path: 'search',
            component: OrderSearchComponent
          },
          {
            path: ':id',
            component: OrderDetailsComponent
          }
        ]
      }
    ])
  ]
})
export class OrderModule {
}
