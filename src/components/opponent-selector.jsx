import styled from "styled-components";
import { useState } from "react";
import OpponentImage from "./opponent-image";
import scVindictor from "../images/SC-Vindictor.png";
import gutrippa from "../images/Gutrippa.png";

export default function OpponentSelector() {
  const [selectedOpponent, setSelectedOpponent] = useState("")

  return (
    <SelectorContainer>
      <label for="opponent">Choose your Opponent:</label>
      <Selector name="opponent" id="fighter-opponent" onChange={(e) => setSelectedOpponent(e.target.value)}>
        <option value="none"></option>
        <option value={scVindictor}>Stormcast Vindictor</option>
        <option value={gutrippa}>Gutrippa</option>
      </Selector>
      <OpponentImage opponent={selectedOpponent} />
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
