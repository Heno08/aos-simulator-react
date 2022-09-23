import styled from "styled-components"

export default function AttackButton() {
  return (
    <SelectorContainer>
      <button id="attack-btn">Roll The Dice!</button>
    </SelectorContainer>
  )
}

const SelectorContainer = styled.div`
  margin: 5px;
  padding: 5px;
`
