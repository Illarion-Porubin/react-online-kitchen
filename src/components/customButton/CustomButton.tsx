import React from "react";
import s from "./CustomButton.module.scss";

interface Props {
  text: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  className?: string;
}

export const CustomButton: React.FC<Props> = React.memo(
  ({ text, onClick, className }) => {
    
    React.useEffect(() => {
      console.log('CustomButton');
    },[])

    return (
      <button className={`${s.mainClassName} ${className}`} onClick={onClick}>
        {text}
      </button>
    );
  },
  // (prevProps, nextProps) => {
  //   if (nextProps.value !== prevProps.value) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }
);
