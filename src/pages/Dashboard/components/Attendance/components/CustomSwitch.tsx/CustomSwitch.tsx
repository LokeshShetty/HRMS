import * as styled from "./styles";
import React, { useState } from "react";
const CustomSwitch: React.FC = () => {
  const [selected, setSelected] = useState(0);
  const options = ["WFH", "On site"];

  const handleSelection = (index: number) => {
    setSelected(index);
  };

  return (
    <styled.SliderContainer>
      <styled.Highlight $position={selected}>
        {options?.[selected]}
      </styled.Highlight>
      {options.map((option, index) => (
        <styled.Option
          key={option}
          $isSelected={index === selected}
          onClick={() => handleSelection(index)}
        >
          {option}
        </styled.Option>
      ))}
    </styled.SliderContainer>
  );
};

export default CustomSwitch;
