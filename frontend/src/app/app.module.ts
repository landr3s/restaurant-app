import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { OrderComponent } from './order/order.component';
import { RatingsComponent } from './ratings/ratings.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MenuService } from './services/menu.service';
import { UserService } from './services/user.service'; // Importa el UserService

@NgModule({
  declarations: [AppComponent, MenuComponent, OrderComponent, RatingsComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [MenuService, UserService], // Agrega UserService a los proveedores
  bootstrap: [AppComponent],
})
export class AppModule {}
