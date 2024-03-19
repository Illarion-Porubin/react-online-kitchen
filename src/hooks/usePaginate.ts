// import React from 'react';
import { RecipeType } from '../types';

interface Props {
    items: number,
    currentPage: number,
    dataList: RecipeType[],
}

export const usePaginate = ({items, dataList, currentPage}: Props) => {
    const allPages = Math.ceil(dataList.length / items);
    const minItems = currentPage >= 1 ? currentPage * items : currentPage;
    const maxItems = currentPage >= 1 ? minItems + items : items;
    const dataValue = dataList.slice(minItems, maxItems);

  return {
    paginate: {
        dataValue,
        allPages,
        items,
    }
  }
}
