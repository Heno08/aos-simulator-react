import styled from "styled-components";
import { useState } from 'react';
import FighterImage from "./fighter-image";
import scVindictor from "../images/SC-Vindictor.png";
import gutrippa from "../images/Gutrippa.png";

export default function FighterSelector() {
  const [selectedFighter, setSelectedFighter] = useState("")

  return (
    <SelectorContainer>
      <label for="fighter">Choose a fighter:</label>
      <Selector name="fighter" id="fighter-selector" onChange={(e) => setSelectedFighter(e.target.value)}>
        <option value="none"></option>
        <option value={scVindictor}>Stormcast Vindictor</option>
        <option value={gutrippa}>Gutrippa</option>
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
