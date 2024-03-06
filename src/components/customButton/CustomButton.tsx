import React from "react";
import s from "./CustomButton.module.scss"

interface Props {
    text: string
    onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined
}

export const CustomButton: React.FC<Props> = ({text, onClick}) => {
  return (
    <button className={s.btn} onClick={onClick}>{text}</button>
  )
}
