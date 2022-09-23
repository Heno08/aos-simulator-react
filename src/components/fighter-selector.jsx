import styled from "styled-components";
import { useState } from 'react';
import FighterImage from "./fighter-image";

export default function FighterSelector({ fighters }) {
  const [selectedFighter, setSelectedFighter] = useState("none");

  return (
    <SelectorContainer>
      <label for="fighter">Choose a fighter:</label>
      <Selector name="fighter" id="fighter-selector" onChange={(e) => setSelectedFighter(e.target.value)}>
        <option value="none"></option>
        {fighters.map((model) => (
          <option key={model.id} value={model.img}>{model.name}</option>
        ))}
      </Selector>
      {selectedFighter !== "none" ? <FighterImage fighter={selectedFighter} /> : <p>Nothing Selected</p>}
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
