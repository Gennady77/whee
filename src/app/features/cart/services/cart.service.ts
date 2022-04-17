import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { StateCartItem } from '../types';

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
