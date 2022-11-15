import React from "react";
import styled from "styled-components";
import FighterImage from "./fighter-image";

export default function FighterSelector({ fighters, selectedFighter, setSelectedFighter }) {
  const onChange = (e) => {
    setSelectedFighter(fighters[e.target.value])
  };

  return (
    <SelectorContainer>
      <label htmlFor="fighter">Choose a Fighter:</label>
      <Selector name="fighter" onChange={onChange}>
        <option value="none"></option>
        {React.Children.toArray(fighters.map((model) => (
          <option key={model.id - 1} value={model.id - 1}>{model.name}</option>
        )))}
      </Selector>
      <FighterImage fighter={selectedFighter} />
    </SelectorContainer>
  )
}

const SelectorContainer = styled.div`
  margin: 5px;
  padding: 5px;
`

const Selector = styled.select`
  height: 25px;
  margin-left: 5px;
`
