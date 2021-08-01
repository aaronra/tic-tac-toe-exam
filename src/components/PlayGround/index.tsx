import React, { FC } from "react";
import Box from "../Box";

interface Props {
  boxes: any[];
  onClick: (index: number) => void;
}

const PlayGround: FC<Props> = ({ boxes, onClick }) => {
  const renderBox = (i: number) => {
    return <Box value={boxes[i]} onClick={() => onClick(i)} />;
  };

  return (
    <div className="playground">
      <div className="row">
        {renderBox(0)}
        {renderBox(1)}
        {renderBox(2)}
        {renderBox(3)}
        {renderBox(4)}
      </div>
      <div className="row">
        {renderBox(5)}
        {renderBox(6)}
        {renderBox(7)}
        {renderBox(8)}
        {renderBox(9)}
      </div>
      <div className="row">
        {renderBox(10)}
        {renderBox(11)}
        {renderBox(12)}
        {renderBox(13)}
        {renderBox(14)}
      </div>
      <div className="row">
        {renderBox(15)}
        {renderBox(16)}
        {renderBox(17)}
        {renderBox(18)}
        {renderBox(19)}
      </div>
      <div className="row">
        {renderBox(20)}
        {renderBox(21)}
        {renderBox(22)}
        {renderBox(23)}
        {renderBox(24)}
      </div>
    </div>
  );
};
export default PlayGround;
