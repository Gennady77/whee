import { Component, Input, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { CartItem } from 'src/app/types';
import { CartService } from '../../cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  @Input() data: CartItem = {
    id: 0,
    title: '',
    description: '',
    avatar: '',
    price: 0
  };

  quantityInput = new FormControl(0, {
    updateOn: 'change',
    validators: [Validators.min(0)]
  });

  added = false;

  constructor(private cartService: CartService) { 
    this.quantityInput.valueChanges.subscribe(val => {
      cartService.$cartItem.next({
        id: this.data.id,
        price: this.data.price,
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
