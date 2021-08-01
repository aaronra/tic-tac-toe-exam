import React, { FC } from "react";
interface Props {
  value: "x" | "o" | null;
  onClick: () => void;
}

const Box: FC<Props> = ({ value, onClick }) => {
  return (
    <button className={`box ${value}`} onClick={onClick}>
      {value}
    </button>
  );
};
export default Box;
