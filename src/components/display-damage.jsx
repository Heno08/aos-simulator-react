import styled from "styled-components";
import { useState, useEffect } from "react";

export default function DisplayDamage() {
  const [damage, setDamage] = useState([]);

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
