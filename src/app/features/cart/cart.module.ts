import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CartPipe } from './cart.pipe';



@NgModule({
  declarations: [
    CartItemComponent,
    CartPipe
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    CartItemComponent,
    CartPipe
  ]
})
export class CartModule { }
