import { Component } from '@angular/core';
import { map, Observable } from 'rxjs';
import { CartService } from './features/cart/cart.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'whee';

  $quantity: Observable<number>;
  $summ: Observable<number>;

  constructor(
    private cartService: CartService
  ) {
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
}
