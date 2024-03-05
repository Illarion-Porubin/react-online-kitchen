import React from "react";
import s from "./CustomButton.module.scss"

interface Props {
    text: string
}

export const CustomButton: React.FC<Props> = ({text}) => {
  return (
    <button className={s.btn}>{text}</button>
  )
}
