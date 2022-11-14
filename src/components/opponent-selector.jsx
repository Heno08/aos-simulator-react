import styled from "styled-components";
import OpponentImage from "./opponent-image";

export default function OpponentSelector({ fighters, selectedOpponent, setSelectedOpponent }) {
  const onChange = (e) => {
    setSelectedOpponent(fighters[e.target.value])
  };

  return (
    <SelectorContainer>
      <label htmlFor="opponent">Choose your Opponent:</label>
      <Selector name="opponent" id="fighter-opponent" onChange={onChange}>
        <option value="none"></option>
        {fighters.map((model) => (
          <option key={model.id} value={model.id}>{model.name}</option>
        ))}
      </Selector>
      <OpponentImage opponent={selectedOpponent} />
    </SelectorContainer>
  )
}

const SelectorContainer = styled.div`
  margin: 5px;
  padding: 5px;
`

const Selector = styled.select`
  height: 25px;
  margin-left: 5px;
`
