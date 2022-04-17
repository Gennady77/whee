import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { CartModule } from './features/cart/cart.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ListItemComponent } from './pages/home-page/list-item/list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ListItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CartModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
