import React from "react";
import s from "./Pagination.module.scss";
import ReactPaginate from "react-paginate";

interface Props {
    allPages: number,
    items: any,
    setCurrentPage: (value: number) => void
}

export const Pagination: React.FC<Props> = ({allPages, items, setCurrentPage}) => {
  const handlePageClick = (e: { selected: number }) => {
    setCurrentPage(e.selected);
  };

  return (
    <ReactPaginate
      className={s.root}
      breakLabel="..."
      nextLabel=">"
      onPageChange={handlePageClick}
      pageRangeDisplayed={items}
      pageCount={allPages}
      previousLabel="<"
      renderOnZeroPageCount={null}
    />
  );
};
