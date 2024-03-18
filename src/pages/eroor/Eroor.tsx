import React from "react";
import s from "./Eroor.module.scss";

export const Error: React.FC = React.memo(() => {

  return (
    <>
      <div className="container">
        <div className={s.eroor}>
          <h1 className={s.eroorTitle}>The page was not found</h1>
          <h2 className={s.statusTitle}>404</h2>
        </div>
      </div>
    </>
  );
}) 
