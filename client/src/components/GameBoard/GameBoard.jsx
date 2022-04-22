import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import GameTopics from '../GameTopics/GameTopics';
import styles from './gameBoard.module.css'


function GameBoard(props) {
  const dispatch = useDispatch();
  const { topics } = useSelector(state => state.topics);
  const { points } = useSelector(state => state.topics);

  useEffect(() => {
    fetch('/topics')
      .then(response => response.json())
      // .then(data => console.log(data))
      .then(data => dispatch({ type: 'INIT_TOPICS', payload: data }))
    fetch('/questions')
      .then(response => response.json())
      // .then(data => console.log(data))
      .then(data => dispatch({ type: 'INIT_QUESTIONS', payload: data }))

  }, [dispatch])



  return (
    <div className={styles.game_board}>
      {topics.map((topic) => <GameTopics key={topic.id} topic={topic} />)}
      <h4>Ваш счет: {points}</h4>
    </div>
  );
}

export default GameBoard;
