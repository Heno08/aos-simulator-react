import styled from "styled-components"

export default function FighterImage({ fighter }) {
  return (
    <div>
      <FighterImageDisplay src={ require(`../images/${fighter}.png`)} id="fighterimage" alt=""/>
    </div>
  );
}

const FighterImageDisplay = styled.img`
  max-width: 200px;
  max-height: 200px;
`
