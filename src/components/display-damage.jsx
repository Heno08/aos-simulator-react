import styled from "styled-components";
import { useEffect } from "react";
import damagecalc from "../backend/combat/damage";

export default function DisplayDamage({ failedSaves, damage, setDamage }) {
  useEffect(() => {
    console.log(failedSaves)
    setDamage(damagecalc(failedSaves));
  }, [failedSaves])

  return(
    <SelectorContainer>
      <p>You scored {damage} Wounds!</p>
    </SelectorContainer>
  )
};

const SelectorContainer = styled.div`
  margin: 5px;
  padding: 5px;
`
