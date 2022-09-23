import styled from "styled-components"

export default function CombatResolution() {
  return(
    <SelectorContainer>
      <p>Hits:<span id="hit-box"></span></p>
      <p>Wounds:<span id="wound-box"></span></p>
      <p>Saving Throw:<span id="save-box"></span></p>
      <p>Damage:<span id="damage-box"></span></p>
    </SelectorContainer>
  )
}

const SelectorContainer = styled.div`
  margin: 5px;
  padding: 5px;
`
