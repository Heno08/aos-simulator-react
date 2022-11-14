import './App.css';
import styled from 'styled-components';
import FighterSelector from './components/fighter-selector';
import OpponentSelector from './components/opponent-selector';
import AttackButton from './components/attack-button';
import { useEffect, useState } from 'react';
import axios from 'axios';

const defaultFighter = {name: 'none', img: 'noimg.jpg', meleeWeapon: {toHit: 0, toWound: 0}};
const defaultOpponent = {name: 'none', img: 'noimg.jpg', save: 0};

function App() {
  const [models, setModels] = useState([]);
  const [selectedFighter, setSelectedFighter] = useState(defaultFighter);
  const [selectedOpponent, setSelectedOpponent] = useState(defaultOpponent);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get('https://late-dew-3121.fly.dev/api/v1/units')
      setModels(data.data)
    }
    fetchData();
  }, []);

  return (
    <>
      <Flex>
        <FighterSelector fighters={models} selectedFighter={selectedFighter} setSelectedFighter={setSelectedFighter} />
        <OpponentSelector fighters={models} selectedOpponent={selectedOpponent} setSelectedOpponent={setSelectedOpponent} />
      </Flex>
      <AttackButton fighter={selectedFighter} opponent={selectedOpponent} />
    </>
  );
}

const Flex = styled.div`
  display: flex;
  justify-content: center;
`

export default App;
