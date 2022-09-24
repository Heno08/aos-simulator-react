import styled from "styled-components"
import { useEffect } from "react"
import { hitting } from "../backend/combat/combat.js";


export default function DisplayHits({ hitRoll, setHits, hits }) {
  useEffect(() => {
    setHits(hitting(hitRoll))
  }, [hitRoll, setHits]);

  return(
    <SelectorContainer>
      <p>You scored {hits} hits!</p>
    </SelectorContainer>
  )
}

const SelectorContainer = styled.div`
  margin: 5px;
  padding: 5px;
`
