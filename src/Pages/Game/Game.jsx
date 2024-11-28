import React, { useContext } from 'react';
import { Container } from "../../styles/General.styled";
import { GameBoardStyle } from './Game.styled';
import GameCell from '../../components/GameCell/GameCell';
import { GameContext } from '../../context/GameContext';

function Game (){
  const {game} = useContext(GameContext)
  return (
    <Container>
      <GameBoardStyle>
        {game.board.map((item, index) => (
            <GameCell key={index} callItem={item} index={index} />
          ))}
      </GameBoardStyle> 
    </Container>
  );
}

export default Game;