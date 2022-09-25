import styled from "styled-components";
import saving from "../backend/combat/saving";
import { useState, useEffect } from "react";

export default function DisplaySaves({ saveRoll, failedSaves, setFailedSaves, save }) {
  const [saves, setSaves] = useState([]);

  useEffect(() => {
    setSaves(saving(saveRoll, save));
  }, [saveRoll, save]);

  useEffect(() => {
    setFailedSaves(saveRoll.length - saves);
  }, [saves]);

  return(
    <SelectorContainer>
      <p>Your Opponent made {saves} saves and failed {failedSaves}!</p>
    </SelectorContainer>
  );
};

const SelectorContainer = styled.div`
  margin: 5px;
  padding: 5px;
`
