import styled from "styled-components"

export default function CombatResolution({ hitRoll, woundRoll }) {
  return(
    <SelectorContainer>
      <p>Hits: {hitRoll}</p>
      <p>Wounds: {woundRoll}</p>
      <p>Saving Throw:<span id="save-box"></span></p>
      <p>Damage:<span id="damage-box"></span></p>
    </SelectorContainer>
  )
}

const SelectorContainer = styled.div`
  margin: 5px;
  padding: 5px;
`
