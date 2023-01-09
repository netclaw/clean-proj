import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './model/Product';

@Pipe({
  name: 'searchProduct'
})
export class SearchProductPipe implements PipeTransform {

  transform(items: (Product[]|null), searchText: string): Product[] {

    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    
    searchText = searchText.toLocaleLowerCase();

    return items.filter(it => {
      return it.title.toLocaleLowerCase().includes(searchText);
    });
  }

}
