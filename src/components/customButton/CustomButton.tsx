import React from "react";
import s from "./CustomButton.module.scss";

interface Props {
  text: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  className?: string;
}

export const CustomButton: React.FC<Props> = ({ text, onClick, className }) => {
  return (
    <button className={`${s.mainClassName} ${className}`} onClick={onClick}>
      {text}
    </button>
  );
};
