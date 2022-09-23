import styled from "styled-components";
import { useState } from "react";
import CombatResolution from "./combat-resolution";

export default function AttackButton({ diceRoll, hitting, wounding, damage }) {
  const [hitRoll, setHitRoll] = useState();
  const [woundRoll, setWoundRoll] = useState();
  const [saveRoll, setSaveRoll] = useState();

  return (
    <SelectorContainer>
      {!hitRoll ? <button id="hit-btn" onClick={() => setHitRoll(diceRoll(1))}>Roll The Dice to Hit!</button> : <button id="wound-btn" onClick={() => setWoundRoll(diceRoll(1))}>Roll The Dice to Wound!</button>}
      {woundRoll ? setSaveRoll(diceRoll(1)) : <></>}
      <CombatResolution hitRoll={hitRoll} woundRoll={woundRoll} saveRoll={saveRoll} />
    </SelectorContainer>
  )
}

const SelectorContainer = styled.div`
  margin: 5px;
  padding: 5px;
`
