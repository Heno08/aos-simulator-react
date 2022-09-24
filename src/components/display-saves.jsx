import styled from "styled-components";
import saving from "../backend/combat/saving";
import { useState, useEffect } from "react";

export default function DisplaySaves({ saveRoll, failedSaves, setFailedSaves }) {
  const [saves, setSaves] = useState([]);

  useEffect(() => {
    console.log(saveRoll.length);
    setSaves(saving(saveRoll));
  }, [saveRoll]);

  useEffect(() => {
    setFailedSaves(saveRoll.length - saves);
  }, [saves]);

  return(
    <SelectorContainer>
      <p>Your Opponent made {saves} saves!</p>
    </SelectorContainer>
  );
};

const SelectorContainer = styled.div`
  margin: 5px;
  padding: 5px;
`
