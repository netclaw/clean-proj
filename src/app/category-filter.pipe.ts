import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './model/Product';

@Pipe({
  name: 'categoryFilter'
})
export class CategoryFilterPipe implements PipeTransform {

  transform(items: (Product[]|null), category: string): Product[] {
    if (!items) {
      return [];
    }
    if (!category) {
      return items;
    }
    return items.filter(x => {
      return x.category==category
    });
  }

}
