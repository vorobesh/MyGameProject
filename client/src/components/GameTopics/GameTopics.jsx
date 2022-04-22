import React from 'react';
import { useSelector } from 'react-redux';
import GameQuestions from '../GameQuestions/GameQuestions';
import styles from './gameTopics.module.css'


function GameTopics({ topic }) {
  const { questions } = useSelector(state => state.questions);

  return (
    <div className={styles.topic}>
      <p>{topic.topic_name}</p>
      {questions.filter((question) => question.topic_id === topic.id).map((question) => <GameQuestions key={question.id} question={question} />)}
    </div>
  );
}

export default GameTopics;
