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
import { AuthGuard } from './guards/auth.guard';
import { RoleGuard } from './guards/role.guard';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'admin-dashboard',
    component: AdminDashboardComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: { role: 'admin' },
  },
  {
    path: 'client-dashboard',
    component: ClientDashboardComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: { role: 'client' },
  },
  {
    path: 'add-dish',
    component: AddDishComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: { role: 'admin' },
  },
  {
    path: 'add-waiter',
    component: AddWaiterComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: { role: 'admin' },
  },
  {
    path: 'rate-waiter',
    component: RateWaiterComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: { role: 'client' },
  },
  {
    path: 'my-orders',
    component: MyOrdersComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: { role: 'client' },
  },
  {
    path: 'orders',
    component: OrdersComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: { role: 'client' },
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
