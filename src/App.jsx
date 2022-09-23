import './App.css';
import styled from 'styled-components';
import FighterSelector from './components/fighter-selector';
import OpponentSelector from './components/opponent-selector';
import AttackButton from './components/attack-button';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { diceRoll, hitting, wounding, damage } from "../src/backend/combat/combat.js";

function App() {
  const [models, setModels] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get('/api/models')
      setModels(data)
    }
    fetchData();
  }, []);

  return (
    <>
      <Flex>
        <FighterSelector fighters={models} />
        <OpponentSelector fighters={models} />
      </Flex>
      <AttackButton diceRoll={diceRoll} hitting={hitting} wounding={wounding} damage={damage}/>
    </>
  );
}

const Flex = styled.div`
  display: flex;
  justify-content: center;
`

export default App;
