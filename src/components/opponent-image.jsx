import styled from "styled-components"

export default function OpponentImage({ opponent }) {
  return (
    <div>
      <FighterImageDisplay src={require(`../images/${opponent.img}`)} id="opponentimage" alt="" />
    </div>
  )
}

const FighterImageDisplay = styled.img`
  max-width: 200px;
  max-height: 200px;
`
