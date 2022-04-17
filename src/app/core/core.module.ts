import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { CartModule } from '../features/cart/cart.module';



@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    CartModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class CoreModule { }
