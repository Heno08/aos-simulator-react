import styled from "styled-components";
import wounding from "../backend/combat/wounding";
import { useEffect } from "react";

export default function DisplayWounds({ woundRoll, wounds, setWounds }) {
  useEffect(() => {
    setWounds(wounding(woundRoll))
  })

  return(
    <SelectorContainer>
      <p>You scored {wounds} Wounds!</p>
    </SelectorContainer>
  )
};

const SelectorContainer = styled.div`
  margin: 5px;
  padding: 5px;
`
