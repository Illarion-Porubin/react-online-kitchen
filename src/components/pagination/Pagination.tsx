import React from "react";
import s from "./Pagination.module.scss";
import ReactPaginate from "react-paginate";

interface Props {
    allPages: number,
    items: number,
    setCurrentPage: (value: number) => void
}


export const Pagination: React.FC<Props> = React.memo(({allPages, items, setCurrentPage}) => {
  return (
    <ReactPaginate
      className={s.root}
      breakLabel="..."
      nextLabel=">"
      onPageChange={(e: { selected: number }) => setCurrentPage(e.selected)}
      pageRangeDisplayed={items}
      pageCount={allPages}
      previousLabel="<"
      renderOnZeroPageCount={null}
    />
  );
})