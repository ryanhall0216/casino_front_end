import { useState } from 'react'
import { styled } from "@mui/system";
import Header from '../partials/Header';
import GameDisplay from '../partials/GameDisplay';
import BetControl from '../partials/BetControl';
import ChatPanel from '../partials/ChatPanel';
import ResultPanel from '../partials/ResultPanel';

const CasinoContainer = styled("div")({
  display: 'grid',
  gridTemplateColumns: '33% 1fr 33%',
  gridTemplateRows: '52px 40vh 1fr',
  gridTemplateAreas: `
      "header header header"
      "game-display bet-control result-panel"
      "chat-panel chat-panel result-panel"
  `,
  padding: '0 5px',
  background: "#404040"
});

const CasinoPlay = () => {

  return (
    <CasinoContainer >
      <Header></Header>
      <GameDisplay></GameDisplay>
      <BetControl></BetControl>
      <ChatPanel></ChatPanel>
      <ResultPanel></ResultPanel>
    </CasinoContainer>
  )
}

export default CasinoPlay
