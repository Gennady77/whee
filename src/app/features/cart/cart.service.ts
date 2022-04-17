import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { StateCartItem } from 'src/app/types';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  $cartItem = new Subject<StateCartItem>();

  $state = new BehaviorSubject<{[key: number]: StateCartItem}>({});

  constructor() { 
    this.$cartItem.subscribe(val => {
      const state = {...this.$state.value};
      state[val.id] = val;

      this.$state.next(state);
    });
  }
}
