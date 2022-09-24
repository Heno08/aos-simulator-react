import './App.css';
import styled from 'styled-components';
import FighterSelector from './components/fighter-selector';
import OpponentSelector from './components/opponent-selector';
import AttackButton from './components/attack-button';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [models, setModels] = useState([]);
  const [selectedFighter, setSelectedFighter] = useState("none");

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get('/api/models')
      setModels(data)
    }
    fetchData();
  }, []);

  useEffect(() => {
    console.log(selectedFighter.name)
  }, [selectedFighter])

  return (
    <>
      <Flex>
        <FighterSelector fighters={models} selectedFighter={selectedFighter} setSelectedFighter={setSelectedFighter} />
        <OpponentSelector fighters={models} />
      </Flex>
      <AttackButton selectedFighter={selectedFighter} />
    </>
  );
}

const Flex = styled.div`
  display: flex;
  justify-content: center;
`

export default App;
