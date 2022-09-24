import styled from "styled-components";
import saving from "../backend/combat/saving";
import { useState, useEffect } from "react";

export default function DisplaySaves({ saveRoll, failedSaves, setFailedSaves }) {
  const [saves, setSaves] = useState(0);

  useEffect(() => {
    console.log(saveRoll);
    setSaves(saving(saveRoll));
    console.log(saves);
  }, [saveRoll])

  return(
    <SelectorContainer>
      <p>Your Opponent made {saves} saves!</p>
    </SelectorContainer>
  )
};

const SelectorContainer = styled.div`
  margin: 5px;
  padding: 5px;
`
