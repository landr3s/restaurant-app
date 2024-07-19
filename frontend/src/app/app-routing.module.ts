import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { ClientDashboardComponent } from './components/client-dashboard/client-dashboard.component';
import { AddDishComponent } from './components/add-dish/add-dish.component';
import { AddWaiterComponent } from './components/add-waiter/add-waiter.component';
import { RateWaiterComponent } from './components/rate-waiter/rate-waiter.component';
import { MyOrdersComponent } from './components/my-orders/my-orders.component';
import { OrdersComponent } from './components/orders/orders.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin-dashboard', component: AdminDashboardComponent },
  { path: 'client-dashboard', component: ClientDashboardComponent },
  { path: 'add-dish', component: AddDishComponent },
  { path: 'add-waiter', component: AddWaiterComponent },
  { path: 'rate-waiter', component: RateWaiterComponent },
  { path: 'my-orders', component: MyOrdersComponent },
  { path: 'orders', component: OrdersComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
