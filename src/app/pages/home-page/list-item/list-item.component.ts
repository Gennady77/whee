import { Component, Input, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { CartService } from 'src/app/features/cart/services/cart.service';
import { CartItem } from 'src/app/features/cart/types';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {
  @Input() data: CartItem = {
    id: 0,
    title: '',
    description: '',
    avatar: '',
    price: 0
  };

  constructor() {}

  ngOnInit(): void {
  }
}
