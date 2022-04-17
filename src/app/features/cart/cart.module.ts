import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartPipe } from './pipes/cart.pipe';
import { CartComponent } from './components/cart/cart.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CartPipe,
    CartComponent,
    CartItemComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    CartPipe,
    CartComponent,
    CartItemComponent
  ]
})
export class CartModule { }
