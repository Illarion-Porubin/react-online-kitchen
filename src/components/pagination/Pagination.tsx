import React from "react";
import s from "./Pagination.module.scss";
import ReactPaginate from "react-paginate";

interface Props {
    allPages: number,
    items: number,
    setCurrentPage: (value: number) => void
}

export const Pagination: React.FC<Props> = ({allPages, setCurrentPage}) => {
  return (
    <ReactPaginate
      
      className={s.root}
      breakLabel="..."
      nextLabel=">"
      onPageChange={(e: { selected: number }) => setCurrentPage(e.selected)}
      pageRangeDisplayed={3}
      pageCount={allPages}
      previousLabel="<"
      marginPagesDisplayed={0}
    />
  );
}