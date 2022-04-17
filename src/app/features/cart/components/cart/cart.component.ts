import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  $quantity: Observable<number>;
  $summ: Observable<number>;

  constructor(private cartService: CartService) {
    this.$quantity = cartService.$state.pipe(map(state => {
      let count = 0;
      let summ = 0;

      for(let id in state) {
        count += state[id].quantity;
      }
      return count;
    }));

    this.$summ = cartService.$state.pipe(map(state => {
      let summ = 0;

      for(let id in state) {
        summ += state[id].price * state[id].quantity;
      }
      return summ;
    }));
  }

  ngOnInit(): void {
  }

}
