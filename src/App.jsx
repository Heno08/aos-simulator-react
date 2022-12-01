import './App.css';
import styled from 'styled-components';
import FighterSelector from './components/fighter-selector';
import OpponentSelector from './components/opponent-selector';
import AttackButton from './components/attack-button';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Login from './components/login';
import Logout from './components/logout';

const defaultFighter = {name: 'none', img: 'noimg.jpg', weapons: [{tohit: 0, towound: 0}]};
const defaultOpponent = {name: 'none', img: 'noimg.jpg', save: 0};

function App() {
  const [models, setModels] = useState([]);
  const [selectedFighter, setSelectedFighter] = useState(defaultFighter);
  const [selectedOpponent, setSelectedOpponent] = useState(defaultOpponent);
  const [admin, setAdmin] = useState(null);
  console.log(admin)

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get('/api/v1/units/')
      setModels(data.data)
    }
    fetchData();
  }, []);

  useEffect (() => {
    fetch("/me").then((r) => {
      if(r.ok) {
        r.json().then((user) => setAdmin(user))
      }
    });
  }, []);

  return (
    <>
      <Flex>
        <FighterSelector fighters={models} selectedFighter={selectedFighter} setSelectedFighter={setSelectedFighter} />
        <OpponentSelector fighters={models} selectedOpponent={selectedOpponent} setSelectedOpponent={setSelectedOpponent} />
      </Flex>
      <AttackButton fighter={selectedFighter} opponent={selectedOpponent} />
      {admin ?  <Logout setAdmin={setAdmin}></Logout> : <Login setAdmin={setAdmin}></Login>}
    </>
  );
}

const Flex = styled.div`
  display: flex;
  justify-content: center;
`

export default App;
