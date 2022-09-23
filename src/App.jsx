import './App.css';
import styled from 'styled-components';
import FighterSelector from './components/fighter-selector';
import OpponentSelector from './components/opponent-selector';
import AttackButton from './components/attack-button';
import CombatResolution from './components/combat-resolution';

function App() {
  return (
    <>
      <Flex>
        <FighterSelector />
        <OpponentSelector />
      </Flex>
      <AttackButton />
      <CombatResolution />
    </>
  );
}

const Flex = styled.div`
  display: flex;
  justify-content: center;
`

export default App;
