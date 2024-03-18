// import React from 'react';
import { RecipeType } from '../types';

interface Props {
    items: number,
    currentPage: number,
    dataList: RecipeType[],
    // setList: React.Dispatch<React.SetStateAction<RecipeType[]>>
}

export const usePaginate = ({items, dataList, currentPage}: Props) => {
    const allPages = Math.ceil(dataList.length / items);
    const minItems = currentPage >= 1 ? currentPage * items : currentPage;
    const maxItems = currentPage >= 1 ? minItems + items : items;
    const dataValue = dataList.slice(minItems, maxItems);

    console.log('usePaginate');

    // React.useMemo(() => {
    //     setList(dataList.slice(minItems, maxItems));
    // }, [currentPage])

  return {
    models: {
        dataValue,
        allPages,
        items,
    }
  }
}
