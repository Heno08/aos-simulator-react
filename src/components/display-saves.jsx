import styled from "styled-components";
import saving from "../backend/combat/saving";
import { useState, useEffect } from "react";

export default function DisplaySaves({ saveRoll }) {
  const [saves, setSaves] = useState(0);
  const [savesPassed, setSavesPassed] = useState([]);
  const [savesFailed, setSavesFailed] = useState([]);

  useEffect(() => {
    console.log(saveRoll);
    setSaves(saving(saveRoll));
    console.log(saves);
  }, [saveRoll])

  return(
    <SelectorContainer>
      <p>You scored {saves} Wounds!</p>
    </SelectorContainer>
  )
};

const SelectorContainer = styled.div`
  margin: 5px;
  padding: 5px;
`
