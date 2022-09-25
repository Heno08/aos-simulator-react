import styled from "styled-components";
import { useState } from "react";
import { diceRoll } from "../backend/combat/combat.js";
import DisplayHits from "./display-hits";
import DisplayWounds from "./display-wounds.jsx";
import DisplaySaves from "./display-saves.jsx";
import DisplayDamage from "./display-damage.jsx";

export default function AttackButton({ fighter, opponent }) {
  const [hitRoll, setHitRoll] = useState([]);
  const [hits, setHits] = useState([]);
  const [woundRoll, setWoundRoll] = useState([]);
  const [wounds, setWounds] = useState([]);
  const [saveRoll, setSaveRoll] = useState([]);
  const [failedSaves, setFailedSaves] = useState([]);
  const [damage, setDamage] =useState([]);

  return (
    <SelectorContainer>
      <button id="hit-btn" onClick={() => setHitRoll(diceRoll(fighter.meleeWeapon.attacks))}>Roll The Dice to Hit!</button>
      <DisplayHits hitRoll={hitRoll} hits={hits} setHits={setHits} toHit={fighter.meleeWeapon.toHit} />
      <button id="wound-btn" onClick={() => setWoundRoll(diceRoll(hits))}>Roll The Dice to Wound!</button>
      <DisplayWounds woundRoll={woundRoll} wounds={wounds} setWounds={setWounds} toWound={fighter.meleeWeapon.toWound} />
      <button id="save-btn" onClick={() => setSaveRoll(diceRoll(wounds))}>Roll To Save!</button>
      <DisplaySaves saveRoll={saveRoll} failedSaves={failedSaves} setFailedSaves={setFailedSaves} save={opponent.save} />
      <DisplayDamage failedSaves={failedSaves} damage={damage} setDamage={setDamage}/>
    </SelectorContainer>
  )
}

const SelectorContainer = styled.div`
  margin: 5px;
  padding: 5px;
`
