import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cart'
})
export class CartPipe implements PipeTransform {

  transform(value: number | null): string {
    return value === 0 || value === null ? 'no items' : (value === 1 ? '1 item' : `${value} items`);
  }

}
