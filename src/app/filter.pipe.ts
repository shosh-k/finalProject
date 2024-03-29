import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
/**
   * Transform
   *
   * @param {any[]} items
   * @param {string} searchText
   * @returns {any[]}
   */
  /**transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }*/
  transform(items: any[], searchText: string): any[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLocaleLowerCase();

    return items.filter(it => {
      return it.NameProduct.toLocaleLowerCase().includes(searchText) || it.DescriptionProduct.toLocaleLowerCase().includes(searchText);
    });
  }
}
