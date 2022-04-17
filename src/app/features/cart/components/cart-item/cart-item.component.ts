import { Component, Input, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  @Input() price = 0;
  @Input() id = 0;

  added = false;

  quantityInput = new FormControl(0, {
    updateOn: 'change',
    validators: [Validators.min(0)]
  });

  constructor(private cartService: CartService) { 
    this.quantityInput.valueChanges.subscribe(val => {
      cartService.$cartItem.next({
        id: this.id,
        price: this.price,
        quantity: val
      });
    });
  }

  ngOnInit(): void {
  }

  addToCart(id: number): void {
    this.added = true;
    this.quantityInput.setValue(1);
  }

  removeFromCard(id: number): void {
    this.added = false;
    this.quantityInput.setValue(0);
  }

}
