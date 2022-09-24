import styled from "styled-components";
import { useState } from "react";
import OpponentImage from "./opponent-image";

export default function OpponentSelector({ fighters }) {
  const [selectedOpponent, setSelectedOpponent] = useState("none");

  return (
    <SelectorContainer>
      <label for="opponent">Choose your Opponent:</label>
      <Selector name="opponent" id="fighter-opponent" onChange={(e) => setSelectedOpponent(e.target.value)}>
        <option value="none"></option>
        {fighters.map((model) => (
          <option key={model.id} value={model.img}>{model.name}</option>
        ))}
      </Selector>
      {selectedOpponent !== "none" ? <OpponentImage opponent={selectedOpponent} /> : <p>Nothing Selected</p>}
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
